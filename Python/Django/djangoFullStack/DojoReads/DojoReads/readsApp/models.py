from django.db import models
from loginApp.models import User

class BookManager(models.Manager):
    def book_validator(self, post_data):
        errors = {}
        if len(post_data["title"]) == 0:
            errors["title"] = "You Cannot leave the Title Blank"
        elif len(post_data["title"]) < 2:
            errors["title"] = "Your Title must be Longer than 2 Characters"

        if post_data["add_author"] and not post_data["author"]:
            errors["author"] = "Please Select an Author"
        elif len(post_data["add_author"]) > 255:
            errors["add_author"] = "Please enter a title shorter than 255 characters"
        return errors

    def review_validator(self, post_data):
        errors = {}
        if len(post_data['review']) == 0:
            errors['review'] = "You cannot not leave the description field blank"
        if len(post_data['review']) < 8:
            errors['review'] = "Reiew must be 8 characters long minimum"
        return errors
    

class Author(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name="book", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()

class Review(models.Model):
    review = models.TextField()
    rating = models.IntegerField()
    user = models.ForeignKey(User, related_name="review", on_delete=models.CASCADE)
    book = models.ForeignKey(Book, related_name="review", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()

