import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { AddZToken } from "../generated/schema"
import { AddZToken as AddZTokenEvent } from "../generated/Oracle/Oracle"
import { handleAddZToken } from "../src/oracle"
import { createAddZTokenEvent } from "./oracle-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _name = "Example string value"
    let _address = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddZTokenEvent = createAddZTokenEvent(_name, _address)
    handleAddZToken(newAddZTokenEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddZToken created and stored", () => {
    assert.entityCount("AddZToken", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddZToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_name",
      "Example string value"
    )
    assert.fieldEquals(
      "AddZToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_address",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
