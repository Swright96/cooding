from unittest import result
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @staticmethod
    def form_validate(user):
        is_valid = True
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL('login_registration_schema').query_db(query,user)
        if len(results) >= 1:
            flash("Email already taken!")
            is_valid = False
        if len(user['first_name']) < 3:
            flash("First Name must be at least 3 characters")
            is_valid = False
        if len(user['last_name']) < 2:
            flash("Last Name must be at least 2 characters")
            is_valid = False
        if len(user['password']) < 8:
            flash("Password must be at least 8 characters long")
        if (user['password']) != (user['password_match']):
            flash("Passwords do not match!")
            is_valid = False
        return is_valid

    @staticmethod
    def email_validate(email):
        is_valid = True
        if not EMAIL_REGEX.match(email['email']):
            flash("Invalid email address!")
            is_valid = True
        return is_valid

    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES(%(first_name)s,%(last_name)s,%(email)s,%(password)s)"
        return connectToMySQL('login_registration_schema').query_db(query,data)
    
    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL('login_registration_schema').query_db(query, data)
        if len(result) < 1:
            return False
        return cls(result[0])
    
    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL('login_registration_schema').query_db(query,data)
        return cls(results[0])
