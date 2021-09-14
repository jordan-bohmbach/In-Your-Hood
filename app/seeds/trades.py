from app.models import db, Trade, portfolio
from datetime import date

def seed_trades():
    demo_trade_1 = Trade(portfolio_id=1, ticker="AAPL", execution_price=100, execution_type="BUY", quantity=10, transaction_date=date.today())
    demo_trade_2 = Trade(portfolio_id=1, ticker="MSFT", execution_price=200, execution_type="BUY", quantity=10, transaction_date=date.today())
    demo_trade_3 = Trade(portfolio_id=1, ticker="GOOG", execution_price=300, execution_type="BUY", quantity=10, transaction_date=date.today())
    demo_trade_4 = Trade(portfolio_id=1, ticker="AMZN", execution_price=400, execution_type="BUY", quantity=10, transaction_date=date.today())
    demo_trade_5 = Trade(portfolio_id=1, ticker="NFLS", execution_price=500, execution_type="BUY", quantity=10, transaction_date=date.today())
    demo_trade_6 = Trade(portfolio_id=1, ticker="BTC", execution_price=65000, execution_type="SELL", quantity=10, transaction_date=date.today())
    demo_trade_7 = Trade(portfolio_id=1, ticker="GME", execution_price=500, execution_type="SELL", quantity=25, transaction_date=date.today())
    demo_trade_8 = Trade(portfolio_id=1, ticker="F", execution_price=17, execution_type="BUY", quantity=100, transaction_date=date.today())
    demo_trade_9 = Trade(portfolio_id=1, ticker="DOGE", execution_price=1, execution_type="SELL", quantity=25000, transaction_date=date.today())
    demo_trade_10 = Trade(portfolio_id=1, ticker="SPY", execution_price=450, execution_type="SELL", quantity=15, transaction_date=date.today())
    demo_trade_11 = Trade(portfolio_id=1, ticker="VXX", execution_price=30, execution_type="SELL", quantity=100, transaction_date=date.today())
    demo_trade_12 = Trade(portfolio_id=1, ticker="SQ", execution_price=250, execution_type="SELL", quantity=25, transaction_date=date.today())
    demo_trade_13 = Trade(portfolio_id=1, ticker="ROKU", execution_price=325, execution_type="SELL", quantity=5, transaction_date=date.today())
    demo_trade_14 = Trade(portfolio_id=1, ticker="AAL", execution_price=15, execution_type="BUY", quantity=200, transaction_date=date.today())
    demo_trade_15 = Trade(portfolio_id=1, ticker="FB", execution_price=360, execution_type="BUY", quantity=10, transaction_date=date.today())

    db.session.add(demo_trade_1)
    db.session.add(demo_trade_2)
    db.session.add(demo_trade_3)
    db.session.add(demo_trade_4)
    db.session.add(demo_trade_5)
    db.session.add(demo_trade_6)
    db.session.add(demo_trade_7)
    db.session.add(demo_trade_8)
    db.session.add(demo_trade_9)
    db.session.add(demo_trade_10)
    db.session.add(demo_trade_11)
    db.session.add(demo_trade_12)
    db.session.add(demo_trade_13)
    db.session.add(demo_trade_14)
    db.session.add(demo_trade_15)

    db.session.commit()


def undo_trades():
    db.session.execute('TRUNCATE trades RESTART IDENTITY CASCADE;')
    db.session.commit()
