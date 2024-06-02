// config.go
package config

import (
	"context"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

func ConnectDB() {
	clientOptions := options.Client().ApplyURI(os.Getenv("MONGO_URI"))
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("Failed to connect to MongoDB: %v", err)
	}
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("Failed to ping MongoDB: %v", err)
	}
	Client = client
	log.Println("Connected to MongoDB")
}

func GetCollection(collectionName string) *mongo.Collection {
	return Client.Database(os.Getenv("MONGO_DB")).Collection(collectionName)
}
