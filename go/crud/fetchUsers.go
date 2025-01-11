package crud

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/jenagansivakumar/api/models"
)

func handleApiFetch(errorChan chan<- error, userId string, client *http.Client) {

	url := fmt.Sprintf("https://jsonplaceholder.typicode.com/user/%s", userId)
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

	var user []models.User

	if err := json.NewDecoder(resp.Body).Decode(&user); err != nil {
		errorChan <- fmt.Errorf()
	}

}

func FetchUser(w http.ResponseWriter, r *http.Request, client *http.Client) {

	if r.Method != http.MethodGet {
		http.Error(w, "Method has to be GET", http.StatusMethodNotAllowed)
		return
	}

}
