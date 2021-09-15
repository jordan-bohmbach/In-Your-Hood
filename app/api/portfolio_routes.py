from flask import Blueprint, request
from ..models import Portfolio, Trade, db

portfolio_routes = Blueprint('portfolios', __name__)


@portfolio_routes.route('')
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


@portfolio_routes.route('', methods=['POST'])
def new_portfolio():

    portfolio = Portfolio (
        name=request.json['name'],
        description=request.json['description'],
        balance=float(request.json['balance']),
        owner_id=int(request.json['owner_id'])
        )
    db.session.add(portfolio)
    db.session.commit()

    return portfolio.to_dict()


@portfolio_routes.route('/<int:id>', methods=['PUT'])
def edit_portfolio(id):
    portfolio = Portfolio.query.get(id)
    portfolio.name=request.json['name']
    portfolio.description=request.json['description']
    portfolio.balance=float(request.json['balance'])
    portfolio.owner_id=int(request.json['owner_id'])

    db.session.add(portfolio)
    db.session.commit()
    
    return portfolio.to_dict()


@portfolio_routes.route('/<int:id>', methods=['DELETE'])
def delete_portfolio(id):
    portfolio = Portfolio.query.get(id)

    db.session.delete(portfolio)
    db.session.commit()

    return {}