package models

type Job struct {
	Id             int    `json:"id"`
	JobTitle       string `json:"jobTitle"`
	JobDescription string `json:"jobDescription"`
}
