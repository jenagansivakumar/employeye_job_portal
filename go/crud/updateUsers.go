package crud

import (
	"encoding/json"
	"net/http"

	"github.com/jenagansivakumar/api/models"
)

func updateUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		http.Error(w, "Method has to PUT", http.StatusMethodNotAllowed)
		return
	}
	defer r.Body.Close()

	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&)
}
