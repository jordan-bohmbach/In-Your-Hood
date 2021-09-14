from flask import Blueprint
from ..models import Watchlist, WatchlistStock

watchlist_routes = Blueprint('watchlists', __name__)


@watchlist_routes.route('/')
def watchlists():
    watchlists = Watchlist.query.all()
    watchlistStocks = WatchlistStock.query.all()

    return {'watchlists': [ {
        'id' : watchlist.id,
        'name' : watchlist.name,
        'description' : watchlist.description,
        'owner_id' : watchlist.owner.id,
        'stocks' : [ watchlistStock.ticker for watchlistStock in watchlistStocks if watchlistStock.watchlist_id == watchlist.id]
    } for watchlist in watchlists]}
