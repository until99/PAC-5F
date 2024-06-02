package services

import (
	"context"
	"errors"

	"github.com/until99/PAC-5F/config"
	"github.com/until99/PAC-5F/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var (
	ErrUserNotFound = errors.New("user not found")
)

func CreateUser(ctx context.Context, user models.User) (primitive.ObjectID, error) {
	collection := config.GetCollection("TB_USERS")
	result, err := collection.InsertOne(ctx, user)
	if err != nil {
		return primitive.NilObjectID, err
	}
	return result.InsertedID.(primitive.ObjectID), nil
}

func GetUsers(ctx context.Context) ([]models.User, error) {
	collection := config.GetCollection("TB_USERS")
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var users []models.User
	for cursor.Next(ctx) {
		var user models.User
		if err := cursor.Decode(&user); err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}

	return users, nil
}

func GetUserByID(ctx context.Context, id primitive.ObjectID) (models.User, error) {
	collection := config.GetCollection("TB_USERS")
	var user models.User
	err := collection.FindOne(ctx, bson.M{"_id": id}).Decode(&user)
	if err != nil {
		return user, err
	}
	return user, nil
}

func UpdateUser(ctx context.Context, id primitive.ObjectID, user models.User) error {
	collection := config.GetCollection("TB_USERS")
	result, err := collection.UpdateOne(ctx, bson.M{"_id": id}, bson.M{"$set": user})
	if err != nil {
		return err
	}
	if result.ModifiedCount == 0 {
		return ErrUserNotFound
	}
	return nil
}

func DeleteUser(ctx context.Context, id primitive.ObjectID) error {
	collection := config.GetCollection("TB_USERS")
	result, err := collection.DeleteOne(ctx, bson.M{"_id": id})
	if err != nil {
		return err
	}
	if result.DeletedCount == 0 {
		return ErrUserNotFound
	}
	return nil
}
