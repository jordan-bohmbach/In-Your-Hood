from sqlalchemy.orm import relationship
from .db import db
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Numeric

class Watchlist(db.Model):
    __tablename__ = 'watchlists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    owner_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)

    owner = relationship("User", back_populates="watchlists")
    watchlist_stocks = relationship("WatchlistStock", back_populates="watchlist")

    @property
    def get_balance(self):
        return self.balance