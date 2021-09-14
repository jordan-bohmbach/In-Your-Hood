from app.models import db, Portfolio

def seed_portfolios():
    technology = Portfolio(name='Technology', description='Companies that build new things', balance=50000, owner_id='1')
    agriculture = Portfolio(name='Agriculture', description='Companies that grow food', balance=10000, owner_id='2')
    travel = Portfolio(name='Travel', description='Companies', balance=10000, owner_id='1')
    smallCap = Portfolio(name="Small-Cap", description='Small Cap Stocks', balance=2500, owner_id='1')
    midCap = Portfolio(name="Mid-Cap", description='Mid Cap Stocks', balance=25000, owner_id='1')
    largeCap = Portfolio(name="Large-Cap", description='Large Cap Stocks', balance=100000, owner_id='1')

    db.session.add(technology)
    db.session.add(agriculture)
    db.session.add(travel)
    db.session.add(smallCap)
    db.session.add(midCap)
    db.session.add(largeCap)

    db.session.commit()


def undo_portfolios():
    db.session.execute('TRUNCATE portfolios RESTART IDENTITY CASCADE;')
    db.session.commit()
