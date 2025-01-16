package joblog

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/jenagansivakumar/api/models"
)

func JobLog(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method has to be POST", http.StatusMethodNotAllowed)
		return
	}

	defer r.Body.Close()

	var job models.Job

	if err := json.NewDecoder(r.Body).Decode(&job); err != nil {
		http.Error(w, "Cannot decode request body", http.StatusInternalServerError)
		return
	}

	fmt.Printf("Job Title: %s, Job Description: %s\n", job.JobTitle, job.JobDescription)

}
