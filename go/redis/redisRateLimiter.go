package redis

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/redis/go-redis/v9"
)

func RateLimiter(client *redis.Client, ctx context.Context, maxRequests int, timeWindow time.Duration) bool {

	key := fmt.Sprintln("api_key")

	count, err := client.Incr(ctx, key).Result()
	if err != nil {
		log.Println("Cannnot increment count")
		return false
	}

	if count > int64(maxRequests) {
		log.Println("Too many requests!")
		return false
	}

	if count == 1 {
		client.Expire(ctx, key, timeWindow)
	}

	fmt.Println("Not using rate limiter!")
	return true

}
