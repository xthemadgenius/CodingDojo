from django.db import models
from login.models import User

class BookManager(models.Manager):
    def book_validator(self, post_data):
        errors = {}
        if len(post_data["book_title"]) == 0:
            errors["book_title"] = "You Cannot leave the Title Blank"
        elif len(post_data["book_title"]) < 2:
            errors["book_title"] = "Your Title must be Longer than 2 Characters"

        if post_data["author_select"] and not post_data["book_author"]:
            errors["book_author"] = "Please Select an Author"
        elif len(post_data["book_author"]) > 255:
            errors["book_author"] = "Please enter a title shorter than 255 characters"
        return errors

    def review_validator(self, post_data):
        errors = {}
        if len(post_data['review_desc']) == 0:
            errors['review_desc'] = "You cannot not leave the description field blank"
        if len(post_data['review_desc']) < 8:
            errors['review_desc'] = "Reiew must be 8 characters long minimum"
        return errors
    

class Author(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name="books", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()

class Reviews(models.Model):
    desc = models.TextField()
    rating = models.IntegerField()
    user_reviewed = models.ForeignKey(User, related_name="reviews", on_delete=models.CASCADE)
    book_reviewed = models.ForeignKey(Book, related_name="reviews", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()

