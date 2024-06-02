// main.go
package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/until99/PAC-5F/config"
	"github.com/until99/PAC-5F/routes"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	config.ConnectDB()

	router := gin.Default()
	routes.RegisterEventRoutes(router)
	routes.RegisterUserRoutes(router)

	err = router.Run(":8080")
	if err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}
