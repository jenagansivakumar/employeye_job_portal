package crud

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sync"

	"github.com/jenagansivakumar/api/models"
)

func handleApiFetch(errorChan chan<- error, userDetailChan chan<- models.User, userId int, client *http.Client, wg *sync.WaitGroup) {
	defer wg.Done()
	url := fmt.Sprintf("https://jsonplaceholder.typicode.com/users/%d", userId)
	if url == "" {
		errorChan <- fmt.Errorf("url is empty")
		return
	}

	resp, err := client.Get(url)
	if err != nil {
		errorChan <- fmt.Errorf("cannot fetch from url")
		return
	}
	defer resp.Body.Close()

	var user models.User

	if err := json.NewDecoder(resp.Body).Decode(&user); err != nil {
		errorChan <- fmt.Errorf("cannot decode response body")
		return
	}

	userDetailChan <- user

}

func FetchUser(w http.ResponseWriter, r *http.Request, client *http.Client) {

	if r.Method != http.MethodGet {
		http.Error(w, "Method has to be GET", http.StatusMethodNotAllowed)
		return
	}

	var wg sync.WaitGroup
	errorChan := make(chan error, 1)
	userDetailChan := make(chan models.User, 1)

	workers := 10

	for i := 0; i < workers; i++ {
		wg.Add(1)
		go handleApiFetch(errorChan, userDetailChan, i, client, &wg)
	}

	go func() {
		wg.Wait()
		close(errorChan)
		close(userDetailChan)
	}()

	results := make(map[string]interface{})
	var errorList []error
	var userList []models.User
	for {
		select {
		case err, ok := <-errorChan:
			if ok {
				errorList = append(errorList, err)
			} else {
				errorChan = nil
			}
		case userDetail, ok := <-userDetailChan:
			if ok {
				userList = append(userList, userDetail)
			} else {
				userDetailChan = nil
			}
		}
		if errorChan == nil && userDetailChan == nil {
			break
		}
	}

	results["errors"] = errorList
	results["userDetails"] = userList

	jsonData, err := json.Marshal(results)
	if err != nil {
		http.Error(w, "Cannot marshal results", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)

}
