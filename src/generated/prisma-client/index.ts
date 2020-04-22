// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  otp: (where?: OtpWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  otp: (where: OtpWhereUniqueInput) => OtpNullablePromise;
  otps: (args?: {
    where?: OtpWhereInput;
    orderBy?: OtpOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Otp>;
  otpsConnection: (args?: {
    where?: OtpWhereInput;
    orderBy?: OtpOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => OtpConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createOtp: (data: OtpCreateInput) => OtpPromise;
  updateOtp: (args: {
    data: OtpUpdateInput;
    where: OtpWhereUniqueInput;
  }) => OtpPromise;
  updateManyOtps: (args: {
    data: OtpUpdateManyMutationInput;
    where?: OtpWhereInput;
  }) => BatchPayloadPromise;
  upsertOtp: (args: {
    where: OtpWhereUniqueInput;
    create: OtpCreateInput;
    update: OtpUpdateInput;
  }) => OtpPromise;
  deleteOtp: (where: OtpWhereUniqueInput) => OtpPromise;
  deleteManyOtps: (where?: OtpWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  otp: (
    where?: OtpSubscriptionWhereInput
  ) => OtpSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type OtpOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "querier_ASC"
  | "querier_DESC"
  | "code_ASC"
  | "code_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "firstname_ASC"
  | "firstname_DESC"
  | "lastname_ASC"
  | "lastname_DESC"
  | "phoneNumber_ASC"
  | "phoneNumber_DESC"
  | "dateOfBirth_ASC"
  | "dateOfBirth_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type OtpWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  code?: Maybe<String>;
}>;

export interface OtpWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  querier?: Maybe<String>;
  querier_not?: Maybe<String>;
  querier_in?: Maybe<String[] | String>;
  querier_not_in?: Maybe<String[] | String>;
  querier_lt?: Maybe<String>;
  querier_lte?: Maybe<String>;
  querier_gt?: Maybe<String>;
  querier_gte?: Maybe<String>;
  querier_contains?: Maybe<String>;
  querier_not_contains?: Maybe<String>;
  querier_starts_with?: Maybe<String>;
  querier_not_starts_with?: Maybe<String>;
  querier_ends_with?: Maybe<String>;
  querier_not_ends_with?: Maybe<String>;
  code?: Maybe<String>;
  code_not?: Maybe<String>;
  code_in?: Maybe<String[] | String>;
  code_not_in?: Maybe<String[] | String>;
  code_lt?: Maybe<String>;
  code_lte?: Maybe<String>;
  code_gt?: Maybe<String>;
  code_gte?: Maybe<String>;
  code_contains?: Maybe<String>;
  code_not_contains?: Maybe<String>;
  code_starts_with?: Maybe<String>;
  code_not_starts_with?: Maybe<String>;
  code_ends_with?: Maybe<String>;
  code_not_ends_with?: Maybe<String>;
  AND?: Maybe<OtpWhereInput[] | OtpWhereInput>;
  OR?: Maybe<OtpWhereInput[] | OtpWhereInput>;
  NOT?: Maybe<OtpWhereInput[] | OtpWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  firstname?: Maybe<String>;
  firstname_not?: Maybe<String>;
  firstname_in?: Maybe<String[] | String>;
  firstname_not_in?: Maybe<String[] | String>;
  firstname_lt?: Maybe<String>;
  firstname_lte?: Maybe<String>;
  firstname_gt?: Maybe<String>;
  firstname_gte?: Maybe<String>;
  firstname_contains?: Maybe<String>;
  firstname_not_contains?: Maybe<String>;
  firstname_starts_with?: Maybe<String>;
  firstname_not_starts_with?: Maybe<String>;
  firstname_ends_with?: Maybe<String>;
  firstname_not_ends_with?: Maybe<String>;
  lastname?: Maybe<String>;
  lastname_not?: Maybe<String>;
  lastname_in?: Maybe<String[] | String>;
  lastname_not_in?: Maybe<String[] | String>;
  lastname_lt?: Maybe<String>;
  lastname_lte?: Maybe<String>;
  lastname_gt?: Maybe<String>;
  lastname_gte?: Maybe<String>;
  lastname_contains?: Maybe<String>;
  lastname_not_contains?: Maybe<String>;
  lastname_starts_with?: Maybe<String>;
  lastname_not_starts_with?: Maybe<String>;
  lastname_ends_with?: Maybe<String>;
  lastname_not_ends_with?: Maybe<String>;
  phoneNumber?: Maybe<String>;
  phoneNumber_not?: Maybe<String>;
  phoneNumber_in?: Maybe<String[] | String>;
  phoneNumber_not_in?: Maybe<String[] | String>;
  phoneNumber_lt?: Maybe<String>;
  phoneNumber_lte?: Maybe<String>;
  phoneNumber_gt?: Maybe<String>;
  phoneNumber_gte?: Maybe<String>;
  phoneNumber_contains?: Maybe<String>;
  phoneNumber_not_contains?: Maybe<String>;
  phoneNumber_starts_with?: Maybe<String>;
  phoneNumber_not_starts_with?: Maybe<String>;
  phoneNumber_ends_with?: Maybe<String>;
  phoneNumber_not_ends_with?: Maybe<String>;
  dateOfBirth?: Maybe<DateTimeInput>;
  dateOfBirth_not?: Maybe<DateTimeInput>;
  dateOfBirth_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dateOfBirth_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dateOfBirth_lt?: Maybe<DateTimeInput>;
  dateOfBirth_lte?: Maybe<DateTimeInput>;
  dateOfBirth_gt?: Maybe<DateTimeInput>;
  dateOfBirth_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface OtpCreateInput {
  id?: Maybe<ID_Input>;
  querier: String;
  code: String;
}

export interface OtpUpdateInput {
  querier?: Maybe<String>;
  code?: Maybe<String>;
}

export interface OtpUpdateManyMutationInput {
  querier?: Maybe<String>;
  code?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
  firstname: String;
  lastname: String;
  phoneNumber: String;
  dateOfBirth: DateTimeInput;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  firstname?: Maybe<String>;
  lastname?: Maybe<String>;
  phoneNumber?: Maybe<String>;
  dateOfBirth?: Maybe<DateTimeInput>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  firstname?: Maybe<String>;
  lastname?: Maybe<String>;
  phoneNumber?: Maybe<String>;
  dateOfBirth?: Maybe<DateTimeInput>;
}

export interface OtpSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<OtpWhereInput>;
  AND?: Maybe<OtpSubscriptionWhereInput[] | OtpSubscriptionWhereInput>;
  OR?: Maybe<OtpSubscriptionWhereInput[] | OtpSubscriptionWhereInput>;
  NOT?: Maybe<OtpSubscriptionWhereInput[] | OtpSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Otp {
  id: ID_Output;
  createdAt: DateTimeOutput;
  querier: String;
  code: String;
}

export interface OtpPromise extends Promise<Otp>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  querier: () => Promise<String>;
  code: () => Promise<String>;
}

export interface OtpSubscription
  extends Promise<AsyncIterator<Otp>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  querier: () => Promise<AsyncIterator<String>>;
  code: () => Promise<AsyncIterator<String>>;
}

export interface OtpNullablePromise extends Promise<Otp | null>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  querier: () => Promise<String>;
  code: () => Promise<String>;
}

export interface OtpConnection {
  pageInfo: PageInfo;
  edges: OtpEdge[];
}

export interface OtpConnectionPromise
  extends Promise<OtpConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<OtpEdge>>() => T;
  aggregate: <T = AggregateOtpPromise>() => T;
}

export interface OtpConnectionSubscription
  extends Promise<AsyncIterator<OtpConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<OtpEdgeSubscription>>>() => T;
  aggregate: <T = AggregateOtpSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface OtpEdge {
  node: Otp;
  cursor: String;
}

export interface OtpEdgePromise extends Promise<OtpEdge>, Fragmentable {
  node: <T = OtpPromise>() => T;
  cursor: () => Promise<String>;
}

export interface OtpEdgeSubscription
  extends Promise<AsyncIterator<OtpEdge>>,
    Fragmentable {
  node: <T = OtpSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateOtp {
  count: Int;
}

export interface AggregateOtpPromise
  extends Promise<AggregateOtp>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateOtpSubscription
  extends Promise<AsyncIterator<AggregateOtp>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
  firstname: String;
  lastname: String;
  phoneNumber: String;
  dateOfBirth: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  firstname: () => Promise<String>;
  lastname: () => Promise<String>;
  phoneNumber: () => Promise<String>;
  dateOfBirth: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  firstname: () => Promise<AsyncIterator<String>>;
  lastname: () => Promise<AsyncIterator<String>>;
  phoneNumber: () => Promise<AsyncIterator<String>>;
  dateOfBirth: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  firstname: () => Promise<String>;
  lastname: () => Promise<String>;
  phoneNumber: () => Promise<String>;
  dateOfBirth: () => Promise<DateTimeOutput>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface OtpSubscriptionPayload {
  mutation: MutationType;
  node: Otp;
  updatedFields: String[];
  previousValues: OtpPreviousValues;
}

export interface OtpSubscriptionPayloadPromise
  extends Promise<OtpSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = OtpPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = OtpPreviousValuesPromise>() => T;
}

export interface OtpSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<OtpSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = OtpSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = OtpPreviousValuesSubscription>() => T;
}

export interface OtpPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  querier: String;
  code: String;
}

export interface OtpPreviousValuesPromise
  extends Promise<OtpPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  querier: () => Promise<String>;
  code: () => Promise<String>;
}

export interface OtpPreviousValuesSubscription
  extends Promise<AsyncIterator<OtpPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  querier: () => Promise<AsyncIterator<String>>;
  code: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
  firstname: String;
  lastname: String;
  phoneNumber: String;
  dateOfBirth: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  firstname: () => Promise<String>;
  lastname: () => Promise<String>;
  phoneNumber: () => Promise<String>;
  dateOfBirth: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  firstname: () => Promise<AsyncIterator<String>>;
  lastname: () => Promise<AsyncIterator<String>>;
  phoneNumber: () => Promise<AsyncIterator<String>>;
  dateOfBirth: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Otp",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/public-sequoiaboot-617/roava-service/dev`
});
export const prisma = new Prisma();
