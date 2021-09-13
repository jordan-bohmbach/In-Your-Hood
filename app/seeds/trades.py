from app.models import db, Trade, portfolio
from datetime import date

def seed_trades():
    demo_trade_1 = Trade(portfolio_id=1, ticker="AAPL", execution_price=100, execution_type="BUY", quantity=10, transaction_date=date.today())
    demo_trade_2 = Trade(portfolio_id=1, ticker="MSFT", execution_price=200, execution_type="BUY", quantity=10, transaction_date=date.today())
    demo_trade_3 = Trade(portfolio_id=1, ticker="GOOG", execution_price=300, execution_type="BUY", quantity=10, transaction_date=date.today())
    demo_trade_4 = Trade(portfolio_id=1, ticker="AMZN", execution_price=400, execution_type="BUY", quantity=10, transaction_date=date.today())
    demo_trade_5 = Trade(portfolio_id=1, ticker="NFLS", execution_price=500, execution_type="BUY", quantity=10, transaction_date=date.today())
    
    db.session.add(demo_trade_1)
    db.session.add(demo_trade_2)
    db.session.add(demo_trade_3)
    db.session.add(demo_trade_4)
    db.session.add(demo_trade_5)

    db.session.commit()


def undo_trades():
    db.session.execute('TRUNCATE trades RESTART IDENTITY CASCADE;')
    db.session.commit()
