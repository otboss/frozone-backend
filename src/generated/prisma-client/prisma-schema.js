"use strict";
// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
exports.__esModule = true;
exports.typeDefs = void 0;
exports.typeDefs = "type AggregateIceCream {\n  count: Int!\n}\n\ntype AggregateToppings {\n  count: Int!\n}\n\ntype BatchPayload {\n  count: Long!\n}\n\ntype IceCream {\n  id: ID!\n  name: String!\n  cost: Float!\n  toppings(where: ToppingsWhereInput, orderBy: ToppingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Toppings!]\n  rating: Int\n  image: String\n}\n\ntype IceCreamConnection {\n  pageInfo: PageInfo!\n  edges: [IceCreamEdge]!\n  aggregate: AggregateIceCream!\n}\n\ninput IceCreamCreateInput {\n  id: ID\n  name: String!\n  cost: Float!\n  toppings: ToppingsCreateManyInput\n  rating: Int\n  image: String\n}\n\ntype IceCreamEdge {\n  node: IceCream!\n  cursor: String!\n}\n\nenum IceCreamOrderByInput {\n  id_ASC\n  id_DESC\n  name_ASC\n  name_DESC\n  cost_ASC\n  cost_DESC\n  rating_ASC\n  rating_DESC\n  image_ASC\n  image_DESC\n}\n\ntype IceCreamPreviousValues {\n  id: ID!\n  name: String!\n  cost: Float!\n  rating: Int\n  image: String\n}\n\ntype IceCreamSubscriptionPayload {\n  mutation: MutationType!\n  node: IceCream\n  updatedFields: [String!]\n  previousValues: IceCreamPreviousValues\n}\n\ninput IceCreamSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: IceCreamWhereInput\n  AND: [IceCreamSubscriptionWhereInput!]\n  OR: [IceCreamSubscriptionWhereInput!]\n  NOT: [IceCreamSubscriptionWhereInput!]\n}\n\ninput IceCreamUpdateInput {\n  name: String\n  cost: Float\n  toppings: ToppingsUpdateManyInput\n  rating: Int\n  image: String\n}\n\ninput IceCreamUpdateManyMutationInput {\n  name: String\n  cost: Float\n  rating: Int\n  image: String\n}\n\ninput IceCreamWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  cost: Float\n  cost_not: Float\n  cost_in: [Float!]\n  cost_not_in: [Float!]\n  cost_lt: Float\n  cost_lte: Float\n  cost_gt: Float\n  cost_gte: Float\n  toppings_every: ToppingsWhereInput\n  toppings_some: ToppingsWhereInput\n  toppings_none: ToppingsWhereInput\n  rating: Int\n  rating_not: Int\n  rating_in: [Int!]\n  rating_not_in: [Int!]\n  rating_lt: Int\n  rating_lte: Int\n  rating_gt: Int\n  rating_gte: Int\n  image: String\n  image_not: String\n  image_in: [String!]\n  image_not_in: [String!]\n  image_lt: String\n  image_lte: String\n  image_gt: String\n  image_gte: String\n  image_contains: String\n  image_not_contains: String\n  image_starts_with: String\n  image_not_starts_with: String\n  image_ends_with: String\n  image_not_ends_with: String\n  AND: [IceCreamWhereInput!]\n  OR: [IceCreamWhereInput!]\n  NOT: [IceCreamWhereInput!]\n}\n\ninput IceCreamWhereUniqueInput {\n  id: ID\n}\n\nscalar Long\n\ntype Mutation {\n  createIceCream(data: IceCreamCreateInput!): IceCream!\n  updateIceCream(data: IceCreamUpdateInput!, where: IceCreamWhereUniqueInput!): IceCream\n  updateManyIceCreams(data: IceCreamUpdateManyMutationInput!, where: IceCreamWhereInput): BatchPayload!\n  upsertIceCream(where: IceCreamWhereUniqueInput!, create: IceCreamCreateInput!, update: IceCreamUpdateInput!): IceCream!\n  deleteIceCream(where: IceCreamWhereUniqueInput!): IceCream\n  deleteManyIceCreams(where: IceCreamWhereInput): BatchPayload!\n  createToppings(data: ToppingsCreateInput!): Toppings!\n  updateToppings(data: ToppingsUpdateInput!, where: ToppingsWhereUniqueInput!): Toppings\n  updateManyToppingses(data: ToppingsUpdateManyMutationInput!, where: ToppingsWhereInput): BatchPayload!\n  upsertToppings(where: ToppingsWhereUniqueInput!, create: ToppingsCreateInput!, update: ToppingsUpdateInput!): Toppings!\n  deleteToppings(where: ToppingsWhereUniqueInput!): Toppings\n  deleteManyToppingses(where: ToppingsWhereInput): BatchPayload!\n}\n\nenum MutationType {\n  CREATED\n  UPDATED\n  DELETED\n}\n\ninterface Node {\n  id: ID!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Query {\n  iceCream(where: IceCreamWhereUniqueInput!): IceCream\n  iceCreams(where: IceCreamWhereInput, orderBy: IceCreamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [IceCream]!\n  iceCreamsConnection(where: IceCreamWhereInput, orderBy: IceCreamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IceCreamConnection!\n  toppings(where: ToppingsWhereUniqueInput!): Toppings\n  toppingses(where: ToppingsWhereInput, orderBy: ToppingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Toppings]!\n  toppingsesConnection(where: ToppingsWhereInput, orderBy: ToppingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ToppingsConnection!\n  node(id: ID!): Node\n}\n\ntype Subscription {\n  iceCream(where: IceCreamSubscriptionWhereInput): IceCreamSubscriptionPayload\n  toppings(where: ToppingsSubscriptionWhereInput): ToppingsSubscriptionPayload\n}\n\ntype Toppings {\n  id: ID!\n  name: String!\n}\n\ntype ToppingsConnection {\n  pageInfo: PageInfo!\n  edges: [ToppingsEdge]!\n  aggregate: AggregateToppings!\n}\n\ninput ToppingsCreateInput {\n  id: ID\n  name: String!\n}\n\ninput ToppingsCreateManyInput {\n  create: [ToppingsCreateInput!]\n  connect: [ToppingsWhereUniqueInput!]\n}\n\ntype ToppingsEdge {\n  node: Toppings!\n  cursor: String!\n}\n\nenum ToppingsOrderByInput {\n  id_ASC\n  id_DESC\n  name_ASC\n  name_DESC\n}\n\ntype ToppingsPreviousValues {\n  id: ID!\n  name: String!\n}\n\ninput ToppingsScalarWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  AND: [ToppingsScalarWhereInput!]\n  OR: [ToppingsScalarWhereInput!]\n  NOT: [ToppingsScalarWhereInput!]\n}\n\ntype ToppingsSubscriptionPayload {\n  mutation: MutationType!\n  node: Toppings\n  updatedFields: [String!]\n  previousValues: ToppingsPreviousValues\n}\n\ninput ToppingsSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: ToppingsWhereInput\n  AND: [ToppingsSubscriptionWhereInput!]\n  OR: [ToppingsSubscriptionWhereInput!]\n  NOT: [ToppingsSubscriptionWhereInput!]\n}\n\ninput ToppingsUpdateDataInput {\n  name: String\n}\n\ninput ToppingsUpdateInput {\n  name: String\n}\n\ninput ToppingsUpdateManyDataInput {\n  name: String\n}\n\ninput ToppingsUpdateManyInput {\n  create: [ToppingsCreateInput!]\n  update: [ToppingsUpdateWithWhereUniqueNestedInput!]\n  upsert: [ToppingsUpsertWithWhereUniqueNestedInput!]\n  delete: [ToppingsWhereUniqueInput!]\n  connect: [ToppingsWhereUniqueInput!]\n  set: [ToppingsWhereUniqueInput!]\n  disconnect: [ToppingsWhereUniqueInput!]\n  deleteMany: [ToppingsScalarWhereInput!]\n  updateMany: [ToppingsUpdateManyWithWhereNestedInput!]\n}\n\ninput ToppingsUpdateManyMutationInput {\n  name: String\n}\n\ninput ToppingsUpdateManyWithWhereNestedInput {\n  where: ToppingsScalarWhereInput!\n  data: ToppingsUpdateManyDataInput!\n}\n\ninput ToppingsUpdateWithWhereUniqueNestedInput {\n  where: ToppingsWhereUniqueInput!\n  data: ToppingsUpdateDataInput!\n}\n\ninput ToppingsUpsertWithWhereUniqueNestedInput {\n  where: ToppingsWhereUniqueInput!\n  update: ToppingsUpdateDataInput!\n  create: ToppingsCreateInput!\n}\n\ninput ToppingsWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  AND: [ToppingsWhereInput!]\n  OR: [ToppingsWhereInput!]\n  NOT: [ToppingsWhereInput!]\n}\n\ninput ToppingsWhereUniqueInput {\n  id: ID\n}\n";
