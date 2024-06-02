package routes

import (
	"github.com/until99/PAC-5F/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterEventRoutes(router *gin.Engine) {
	eventRoutes := router.Group("/events")
	{
		eventRoutes.POST("/", controllers.CreateEvent)
		eventRoutes.GET("/", controllers.GetEvents)
		eventRoutes.GET("/:id", controllers.GetEventByID)
		eventRoutes.PUT("/:id", controllers.UpdateEvent)
		eventRoutes.DELETE("/:id", controllers.DeleteEvent)
	}
}
