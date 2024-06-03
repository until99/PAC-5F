package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/until99/PAC-5F/controllers"
)

func RegisterUserRoutes(router *gin.Engine) {
	router.POST("/users", controllers.CreateUser)
	router.GET("/users", controllers.GetUsers)
	router.GET("/users/:id", controllers.GetUserByID)
	router.PUT("/users/:id", controllers.UpdateUser)
	router.DELETE("/users/:id", controllers.DeleteUser)
	
	router.GET("/users/:id/organizer-events", controllers.GetOrganizerEvents)
	// router.GET("/users/:id/non-organizer-events", controllers.GetNonOrganizerEvents)
}
