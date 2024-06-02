package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/until99/PAC-5F/controllers"
)

func RegisterEventRoutes(router *gin.Engine) {
	router.POST("/events", controllers.CreateEvent)
	router.GET("/events", controllers.GetEvents)
	router.GET("/events/:id", controllers.GetEventByID)
	router.PUT("/events/:id", controllers.UpdateEvent)
	router.DELETE("/events/:id", controllers.DeleteEvent)
}
