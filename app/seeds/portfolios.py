from app.models import db, Portfolio

def seed_portfolios():
    technology = Portfolio(name='Technology', description='Companies that build new things', balance=50000, owner_id='1')
    agriculture = Portfolio(name='Agriculture', description='Companies that grow food', balance=10000, owner_id='2')
    
    db.session.add(technology)
    db.session.add(agriculture)

    db.session.commit()


def undo_portfolios():
    db.session.execute('TRUNCATE portfolios RESTART IDENTITY CASCADE;')
    db.session.commit()
