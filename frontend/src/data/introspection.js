/*
query Introspect {
  __schema {
    types {
      kind
      name
      possibleTypes {
        name
      }
    }
  }
}
*/


export default `{
  "data": {
    "__schema": {
      "types": [
        {
          "kind": "OBJECT",
          "name": "RootQuery",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "User",
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "ID",
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "String",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Reward",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Profile",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Milestone",
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Int",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Lead",
          "possibleTypes": null
        },
        {
          "kind": "UNION",
          "name": "Event",
          "possibleTypes": [
            {
              "name": "CreatedLead"
            },
            {
              "name": "AssignedReward"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "CreatedLead",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AssignedReward",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Mutation",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Token",
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Boolean",
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateUserInput",
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Email",
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "RewardInput",
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateMilestoneInput",
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateLeadInput",
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateProfileInput",
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateRewardInput",
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateMilestoneInput",
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "AssignRewardInput",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Schema",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Type",
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__TypeKind",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Field",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__InputValue",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__EnumValue",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Directive",
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__DirectiveLocation",
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Date",
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Second",
          "possibleTypes": null
        }
      ]
    }
  }
}
`
