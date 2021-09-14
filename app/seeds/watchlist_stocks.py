from app.models.watchlist_stock import WatchlistStock
from app.models import db, WatchlistStock
from datetime import date

def seed_watchlist_stocks():
    demo_watchlist_stock_1 = WatchlistStock(watchlist_id=1, ticker="GBTC")
    demo_watchlist_stock_2 = WatchlistStock(watchlist_id=1, ticker="NVDA")
    demo_watchlist_stock_3 = WatchlistStock(watchlist_id=1, ticker="INTC")
    demo_watchlist_stock_4 = WatchlistStock(watchlist_id=1, ticker="PYPL")
    demo_watchlist_stock_5 = WatchlistStock(watchlist_id=1, ticker="BABA")
    demo_watchlist_stock_6 = WatchlistStock(watchlist_id=1, ticker="GME")
    demo_watchlist_stock_7 = WatchlistStock(watchlist_id=1, ticker="BBY")
    demo_watchlist_stock_8 = WatchlistStock(watchlist_id=1, ticker="DOGE")
    demo_watchlist_stock_9 = WatchlistStock(watchlist_id=1, ticker="F")
    demo_watchlist_stock_10 = WatchlistStock(watchlist_id=1, ticker="XOM")
    demo_watchlist_stock_11 = WatchlistStock(watchlist_id=1, ticker="T")
    demo_watchlist_stock_12 = WatchlistStock(watchlist_id=1, ticker="JNJ")
    demo_watchlist_stock_13 = WatchlistStock(watchlist_id=1, ticker="DIS")
    demo_watchlist_stock_14 = WatchlistStock(watchlist_id=1, ticker="PTON")
    demo_watchlist_stock_15 = WatchlistStock(watchlist_id=1, ticker="ETH.X")

    db.session.add(demo_watchlist_stock_1)
    db.session.add(demo_watchlist_stock_2)
    db.session.add(demo_watchlist_stock_3)
    db.session.add(demo_watchlist_stock_4)
    db.session.add(demo_watchlist_stock_5)
    db.session.add(demo_watchlist_stock_6)
    db.session.add(demo_watchlist_stock_7)
    db.session.add(demo_watchlist_stock_8)
    db.session.add(demo_watchlist_stock_9)
    db.session.add(demo_watchlist_stock_10)
    db.session.add(demo_watchlist_stock_11)
    db.session.add(demo_watchlist_stock_12)
    db.session.add(demo_watchlist_stock_13)
    db.session.add(demo_watchlist_stock_14)
    db.session.add(demo_watchlist_stock_15)

    db.session.commit()


def undo_watchlist_stocks():
    db.session.execute('TRUNCATE watchlist_stocks RESTART IDENTITY CASCADE;')
    db.session.commit()