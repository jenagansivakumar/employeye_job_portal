package joblog

import (
	"encoding/json"
	"net/http"

	"github.com/jenagansivakumar/api/db"
	"github.com/jenagansivakumar/api/models"
)

func JobLog(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method has to be POST", http.StatusMethodNotAllowed)
		return
	}

	defer r.Body.Close()

	var jobLog models.JobLogPayLoad

	if err := json.NewDecoder(r.Body).Decode(&jobLog); err != nil {
		http.Error(w, "Invalid JSON payload", http.StatusBadRequest)
		return
	}

	query := `
	INSERT INTO job_logs (job_id, job_title, job_description, created_at)
		VALUES ($1, $2, $3, NOW())
	`

	_, err := db.DB.Exec(query, jobLog.JobId, jobLog.JobTitle, jobLog.JobDescription)
	if err != nil {
		http.Error(w, "Failed to log job", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Successfully logged job"))

}
