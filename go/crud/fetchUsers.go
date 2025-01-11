package crud

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/jenagansivakumar/api/models"
)

func fetchUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method has to be GET", http.StatusInternalServerError)
		return
	}

	client := http.Client{
		Timeout: 10 * time.Second,
	}

	url := "http://localhost:4000/users"
	if url == "" {
		fmt.Println("URL is empty")
	}

	resp, err := client.Get(url)
	if err != nil {
		http.Error(w, "Cannot retrieve url", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		http.Error(w, "Returned non 200 error code", http.StatusInternalServerError)
		return
	}
	var user []models.User
	if err := json.NewDecoder(resp.Body).Decode(&user); err != nil {
		http.Error(w, "Cannot decode response body", http.StatusInternalServerError)
		return
	}

	if len(user) == 0 {
		http.Error(w, "User list is empty", http.StatusInternalServerError)
		return
	}

	jsonData, err := json.Marshal(user)
	if err != nil {
		http.Error(w, "Cannot marshal user data", http.StatusInternalServerError)
		return
	}

}
