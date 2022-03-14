from sqlite3 import connect
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
class Email:
    def __init__(self, data):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate(email):
        is_valid = True
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(email['email']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid

    @classmethod
    def save(cls, data):
        query = "INSERT INTO emails (email, created_at) VALUES (%(email)s, NOW());"
        result = connectToMySQL('email_registration_schema').query_db(query, data)
        return result
    
    @classmethod
    def get_all_emails(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL('email_registration_schema').query_db(query)
        emails = []
        for x in results:
            emails.append(cls(x))
        return emails