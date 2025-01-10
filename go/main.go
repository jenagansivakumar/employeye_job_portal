package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
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
	r := mux.NewRouter()

	return r
}
