package crud

import (
	"encoding/json"
	"net/http"

	"github.com/jenagansivakumar/api/models"
)

func createUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method has to be POST", http.StatusInternalServerError)
		return
	}

	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Cannot decode request body", http.StatusInternalServerError)
		return
	}

	if user.Name == "" || user.Email == "" {
		http.Error(w, "Name and email are required", http.StatusInternalServerError)
		return
	}

}
