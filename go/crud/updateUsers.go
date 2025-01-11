package crud

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gofiber/fiber/v2/log"
	"github.com/jenagansivakumar/api/models"
)

func updateUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		http.Error(w, "Method has to PUT", http.StatusMethodNotAllowed)
		return
	}
	defer r.Body.Close()
	idString := r.URL.Query().Get("id")
	if idString == "" {
		http.Error(w, "ID is required", http.StatusBadRequest)
		return
	}

	id, err := strconv.Atoi(idString)
	if err != nil {
		log.Error("Cannot convert string to int")
		http.Error(w, "internal error", http.StatusInternalServerError)
	}

	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Cannot decode request body", http.StatusInternalServerError)
	}

	for _, user := range models.Users{
		if 
	}

}
