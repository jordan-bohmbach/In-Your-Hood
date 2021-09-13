from app.models.watchlist_stock import WatchlistStock
from app.models import db, WatchlistStock
from datetime import date

def seed_watchlist_stocks():
    demo_watchlist_stock_1 = WatchlistStock(watchlist_id=1, ticker="GBTC")
    demo_watchlist_stock_2 = WatchlistStock(watchlist_id=1, ticker="NVDA")
    demo_watchlist_stock_3 = WatchlistStock(watchlist_id=1, ticker="INTC")
    demo_watchlist_stock_4 = WatchlistStock(watchlist_id=1, ticker="PYPL")
    demo_watchlist_stock_5 = WatchlistStock(watchlist_id=1, ticker="BABA")
    
    db.session.add(demo_watchlist_stock_1)
    db.session.add(demo_watchlist_stock_2)
    db.session.add(demo_watchlist_stock_3)
    db.session.add(demo_watchlist_stock_4)
    db.session.add(demo_watchlist_stock_5)

    db.session.commit()


def undo_watchlist_stocks():
    db.session.execute('TRUNCATE watchlist_stocks RESTART IDENTITY CASCADE;')
    db.session.commit()