package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/jenagansivakumar/api/crud"
)

func main() {

	router := muxRouter()

	server := http.Server{
		Handler:      router,
		Addr:         ":8080",
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	fmt.Printf("Server is running on port %s", server.Addr)
	log.Fatal(server.ListenAndServe())
}

func muxRouter() *mux.Router {
	// redisClient := clients.RedisClient()
	client := http.Client{
		Timeout: 10 * time.Second,
	}
	r := mux.NewRouter()
	r.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		crud.FetchUser(w, r, &client)
	}).Methods(http.MethodGet)
	r.HandleFunc("/users", crud.CreateUser).Methods(http.MethodPost)

	return r
}
