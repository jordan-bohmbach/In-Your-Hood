from app.models.watchlist import Watchlist
from app.models import db, Watchlist
from datetime import date

def seed_watchlists():
    demo_watchlist = Watchlist(name='TechWatch', description='Technology stocks I am watching for the future', owner_id=1)

    db.session.add(demo_watchlist)

    db.session.commit()


def undo_watchlists():
    db.session.execute('TRUNCATE watchlist RESTART IDENTITY CASCADE;')
    db.session.commit()