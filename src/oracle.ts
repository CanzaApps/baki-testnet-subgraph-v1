import {
  // AddZToken as AddZTokenEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  // RemoveZToken as RemoveZTokenEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SetZCollateralUSD as SetZCollateralUSDEvent,
  // SetZTokenUSDValue as SetZTokenUSDValueEvent
} from "../generated/Oracle/Oracle"
import {
  // AddZToken,
  OwnershipTransferred,
  // RemoveZToken,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetZCollateralUSD,
  // SetZTokenUSDValue
} from "../generated/schema"

// export function handleAddZToken(event: AddZTokenEvent): void {
//   let entity = new AddZToken(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity._name = event.params._name
//   entity._address = event.params._address

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// export function handleRemoveZToken(event: RemoveZTokenEvent): void {
//   let entity = new RemoveZToken(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity._name = event.params._name

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetZCollateralUSD(event: SetZCollateralUSDEvent): void {
  let entity = new SetZCollateralUSD(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._value = event.params._value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// export function handleSetZTokenUSDValue(event: SetZTokenUSDValueEvent): void {
//   let entity = new SetZTokenUSDValue(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity._name = event.params._name
//   entity._value = event.params._value

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }
