from flask import Blueprint
from ..models import Portfolio, Trade

portfolio_routes = Blueprint('portfolios', __name__)


@portfolio_routes.route('/')
def portfolios():
    portfolios = Portfolio.query.all()
    trades = Trade.query.all()

    return {'portfolios': [ {
        'id' : portfolio.id,
        'name' : portfolio.name,
        'description' : portfolio.description,
        'balance' : float(portfolio.balance),
        'owner_id' : portfolio.owner.id,
        'trades' : [ {
            'id' : trade.id,
            'portfolio_id' : trade.portfolio_id,
            'ticker' : trade.ticker,
            'execution_price' : float(trade.execution_price),
            'execution_type' : trade.execution_type,
            'quantity' : trade.quantity,
            'transaction_date' : trade.transaction_date
         }
        for trade in trades if trade.portfolio_id == portfolio.id]
    } for portfolio in portfolios]}
