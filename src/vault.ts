import {
  Deposit as DepositEvent,
  Swap as SwapEvent,
  Withdraw as WithdrawEvent,
  Liquidate as LiquidateEvent
} from "../generated/Vault/Vault"
import { Deposit, Swap, Withdraw, Liquidate } from "../generated/schema"


export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params._account
  entity.depositAmount = event.params._depositAmount
  entity.mintAmount = event.params._mintAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.zTokenFrom = event.params._zTokenFrom
  entity.amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params._account
  entity.zToken = event.params._token
  entity.amount = event.params._amountToWithdraw

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidate(event: LiquidateEvent): void {
  let entity = new Liquidate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params._account
  entity.debt = event.params.debt
  entity.rewards = event.params.rewards
  entity.liquidator = event.params.liquidator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
