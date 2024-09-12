
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pitch
 * 
 */
export type Pitch = $Result.DefaultSelection<Prisma.$PitchPayload>
/**
 * Model Stake
 * 
 */
export type Stake = $Result.DefaultSelection<Prisma.$StakePayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>
/**
 * Model CurrentLiquidity
 * 
 */
export type CurrentLiquidity = $Result.DefaultSelection<Prisma.$CurrentLiquidityPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  ADMINREMOVED: 'ADMINREMOVED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const RewardsType: {
  NOTSTARTED: 'NOTSTARTED',
  STARTED: 'STARTED',
  ENDED: 'ENDED',
  REWARDSDISTRIBUTED: 'REWARDSDISTRIBUTED',
  ADMINREMOVED: 'ADMINREMOVED'
};

export type RewardsType = (typeof RewardsType)[keyof typeof RewardsType]


export const TaskType: {
  YOUTUBEVIDEO: 'YOUTUBEVIDEO',
  YOUTUBESHORT: 'YOUTUBESHORT',
  TWITTERTWEET: 'TWITTERTWEET',
  TWITTERPOST: 'TWITTERPOST'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const ParticpationType: {
  EVERYONE: 'EVERYONE',
  PERMITED: 'PERMITED'
};

export type ParticpationType = (typeof ParticpationType)[keyof typeof ParticpationType]


export const CampaignStatus: {
  NOTSTARTED: 'NOTSTARTED',
  STARTED: 'STARTED',
  ENDED: 'ENDED',
  REWARDSDISTRIBUTED: 'REWARDSDISTRIBUTED',
  ADMINREMOVED: 'ADMINREMOVED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type RewardsType = $Enums.RewardsType

export const RewardsType: typeof $Enums.RewardsType

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type ParticpationType = $Enums.ParticpationType

export const ParticpationType: typeof $Enums.ParticpationType

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.pitch`: Exposes CRUD operations for the **Pitch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pitches
    * const pitches = await prisma.pitch.findMany()
    * ```
    */
  get pitch(): Prisma.PitchDelegate<ExtArgs>;

  /**
   * `prisma.stake`: Exposes CRUD operations for the **Stake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stakes
    * const stakes = await prisma.stake.findMany()
    * ```
    */
  get stake(): Prisma.StakeDelegate<ExtArgs>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs>;

  /**
   * `prisma.currentLiquidity`: Exposes CRUD operations for the **CurrentLiquidity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurrentLiquidities
    * const currentLiquidities = await prisma.currentLiquidity.findMany()
    * ```
    */
  get currentLiquidity(): Prisma.CurrentLiquidityDelegate<ExtArgs>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pitch: 'Pitch',
    Stake: 'Stake',
    Investment: 'Investment',
    CurrentLiquidity: 'CurrentLiquidity',
    Campaign: 'Campaign'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "pitch" | "stake" | "investment" | "currentLiquidity" | "campaign"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pitch: {
        payload: Prisma.$PitchPayload<ExtArgs>
        fields: Prisma.PitchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PitchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PitchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          findFirst: {
            args: Prisma.PitchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PitchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          findMany: {
            args: Prisma.PitchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>[]
          }
          create: {
            args: Prisma.PitchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          createMany: {
            args: Prisma.PitchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PitchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>[]
          }
          delete: {
            args: Prisma.PitchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          update: {
            args: Prisma.PitchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          deleteMany: {
            args: Prisma.PitchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PitchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PitchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          aggregate: {
            args: Prisma.PitchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePitch>
          }
          groupBy: {
            args: Prisma.PitchGroupByArgs<ExtArgs>
            result: $Utils.Optional<PitchGroupByOutputType>[]
          }
          count: {
            args: Prisma.PitchCountArgs<ExtArgs>
            result: $Utils.Optional<PitchCountAggregateOutputType> | number
          }
        }
      }
      Stake: {
        payload: Prisma.$StakePayload<ExtArgs>
        fields: Prisma.StakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload>
          }
          findFirst: {
            args: Prisma.StakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload>
          }
          findMany: {
            args: Prisma.StakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload>[]
          }
          create: {
            args: Prisma.StakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload>
          }
          createMany: {
            args: Prisma.StakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload>[]
          }
          delete: {
            args: Prisma.StakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload>
          }
          update: {
            args: Prisma.StakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload>
          }
          deleteMany: {
            args: Prisma.StakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StakePayload>
          }
          aggregate: {
            args: Prisma.StakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStake>
          }
          groupBy: {
            args: Prisma.StakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StakeCountArgs<ExtArgs>
            result: $Utils.Optional<StakeCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
      CurrentLiquidity: {
        payload: Prisma.$CurrentLiquidityPayload<ExtArgs>
        fields: Prisma.CurrentLiquidityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrentLiquidityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrentLiquidityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload>
          }
          findFirst: {
            args: Prisma.CurrentLiquidityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrentLiquidityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload>
          }
          findMany: {
            args: Prisma.CurrentLiquidityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload>[]
          }
          create: {
            args: Prisma.CurrentLiquidityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload>
          }
          createMany: {
            args: Prisma.CurrentLiquidityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrentLiquidityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload>[]
          }
          delete: {
            args: Prisma.CurrentLiquidityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload>
          }
          update: {
            args: Prisma.CurrentLiquidityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload>
          }
          deleteMany: {
            args: Prisma.CurrentLiquidityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrentLiquidityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CurrentLiquidityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentLiquidityPayload>
          }
          aggregate: {
            args: Prisma.CurrentLiquidityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrentLiquidity>
          }
          groupBy: {
            args: Prisma.CurrentLiquidityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrentLiquidityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrentLiquidityCountArgs<ExtArgs>
            result: $Utils.Optional<CurrentLiquidityCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    investments: number
    pitches: number
    stakes: number
    liquiditys: number
    campaigns: number
    winnedCampaigns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | UserCountOutputTypeCountInvestmentsArgs
    pitches?: boolean | UserCountOutputTypeCountPitchesArgs
    stakes?: boolean | UserCountOutputTypeCountStakesArgs
    liquiditys?: boolean | UserCountOutputTypeCountLiquiditysArgs
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    winnedCampaigns?: boolean | UserCountOutputTypeCountWinnedCampaignsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPitchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StakeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLiquiditysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrentLiquidityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWinnedCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type InvestmentCountOutputType
   */

  export type InvestmentCountOutputType = {
    partners: number
    pitches: number
  }

  export type InvestmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partners?: boolean | InvestmentCountOutputTypeCountPartnersArgs
    pitches?: boolean | InvestmentCountOutputTypeCountPitchesArgs
  }

  // Custom InputTypes
  /**
   * InvestmentCountOutputType without action
   */
  export type InvestmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentCountOutputType
     */
    select?: InvestmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestmentCountOutputType without action
   */
  export type InvestmentCountOutputTypeCountPartnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StakeWhereInput
  }

  /**
   * InvestmentCountOutputType without action
   */
  export type InvestmentCountOutputTypeCountPitchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    campaignWinners: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaignWinners?: boolean | CampaignCountOutputTypeCountCampaignWinnersArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountCampaignWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    walletAddress: string | null
    name: string | null
    bio: string | null
    image: string | null
    discord: string | null
    twitter: string | null
    opensea: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    walletAddress: string | null
    name: string | null
    bio: string | null
    image: string | null
    discord: string | null
    twitter: string | null
    opensea: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    walletAddress: number
    name: number
    bio: number
    image: number
    discord: number
    twitter: number
    opensea: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    walletAddress?: true
    name?: true
    bio?: true
    image?: true
    discord?: true
    twitter?: true
    opensea?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    walletAddress?: true
    name?: true
    bio?: true
    image?: true
    discord?: true
    twitter?: true
    opensea?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    walletAddress?: true
    name?: true
    bio?: true
    image?: true
    discord?: true
    twitter?: true
    opensea?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    walletAddress: string
    name: string | null
    bio: string | null
    image: string | null
    discord: string | null
    twitter: string | null
    opensea: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    walletAddress?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    discord?: boolean
    twitter?: boolean
    opensea?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investments?: boolean | User$investmentsArgs<ExtArgs>
    pitches?: boolean | User$pitchesArgs<ExtArgs>
    stakes?: boolean | User$stakesArgs<ExtArgs>
    liquiditys?: boolean | User$liquiditysArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    winnedCampaigns?: boolean | User$winnedCampaignsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    walletAddress?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    discord?: boolean
    twitter?: boolean
    opensea?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    walletAddress?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    discord?: boolean
    twitter?: boolean
    opensea?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | User$investmentsArgs<ExtArgs>
    pitches?: boolean | User$pitchesArgs<ExtArgs>
    stakes?: boolean | User$stakesArgs<ExtArgs>
    liquiditys?: boolean | User$liquiditysArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    winnedCampaigns?: boolean | User$winnedCampaignsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      pitches: Prisma.$PitchPayload<ExtArgs>[]
      stakes: Prisma.$StakePayload<ExtArgs>[]
      liquiditys: Prisma.$CurrentLiquidityPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      winnedCampaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      walletAddress: string
      name: string | null
      bio: string | null
      image: string | null
      discord: string | null
      twitter: string | null
      opensea: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `walletAddress`
     * const userWithWalletAddressOnly = await prisma.user.findMany({ select: { walletAddress: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `walletAddress`
     * const userWithWalletAddressOnly = await prisma.user.createManyAndReturn({ 
     *   select: { walletAddress: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investments<T extends User$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany"> | Null>
    pitches<T extends User$pitchesArgs<ExtArgs> = {}>(args?: Subset<T, User$pitchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findMany"> | Null>
    stakes<T extends User$stakesArgs<ExtArgs> = {}>(args?: Subset<T, User$stakesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "findMany"> | Null>
    liquiditys<T extends User$liquiditysArgs<ExtArgs> = {}>(args?: Subset<T, User$liquiditysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "findMany"> | Null>
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany"> | Null>
    winnedCampaigns<T extends User$winnedCampaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$winnedCampaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly discord: FieldRef<"User", 'String'>
    readonly twitter: FieldRef<"User", 'String'>
    readonly opensea: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.investments
   */
  export type User$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * User.pitches
   */
  export type User$pitchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    where?: PitchWhereInput
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    cursor?: PitchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * User.stakes
   */
  export type User$stakesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    where?: StakeWhereInput
    orderBy?: StakeOrderByWithRelationInput | StakeOrderByWithRelationInput[]
    cursor?: StakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StakeScalarFieldEnum | StakeScalarFieldEnum[]
  }

  /**
   * User.liquiditys
   */
  export type User$liquiditysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    where?: CurrentLiquidityWhereInput
    orderBy?: CurrentLiquidityOrderByWithRelationInput | CurrentLiquidityOrderByWithRelationInput[]
    cursor?: CurrentLiquidityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurrentLiquidityScalarFieldEnum | CurrentLiquidityScalarFieldEnum[]
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.winnedCampaigns
   */
  export type User$winnedCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pitch
   */

  export type AggregatePitch = {
    _count: PitchCountAggregateOutputType | null
    _avg: PitchAvgAggregateOutputType | null
    _sum: PitchSumAggregateOutputType | null
    _min: PitchMinAggregateOutputType | null
    _max: PitchMaxAggregateOutputType | null
  }

  export type PitchAvgAggregateOutputType = {
    initialInvestment: number | null
    profitAmountEstimation: number | null
    profitPercentageAmount: number | null
    chainId: number | null
    voteFor: number | null
    voteAgainst: number | null
    totalVoters: number | null
  }

  export type PitchSumAggregateOutputType = {
    initialInvestment: number | null
    profitAmountEstimation: number | null
    profitPercentageAmount: number | null
    chainId: number | null
    voteFor: number | null
    voteAgainst: number | null
    totalVoters: number | null
  }

  export type PitchMinAggregateOutputType = {
    id: string | null
    userId: string | null
    investmentId: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    initialInvestment: number | null
    profitAmountEstimation: number | null
    isNative: boolean | null
    investmentTokenAddress: string | null
    profitPercentageAmount: number | null
    chainId: number | null
    isExecuted: boolean | null
    voteFor: number | null
    voteAgainst: number | null
    totalVoters: number | null
    Status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PitchMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    investmentId: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    initialInvestment: number | null
    profitAmountEstimation: number | null
    isNative: boolean | null
    investmentTokenAddress: string | null
    profitPercentageAmount: number | null
    chainId: number | null
    isExecuted: boolean | null
    voteFor: number | null
    voteAgainst: number | null
    totalVoters: number | null
    Status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PitchCountAggregateOutputType = {
    id: number
    userId: number
    investmentId: number
    title: number
    description: number
    deadline: number
    initialInvestment: number
    profitAmountEstimation: number
    isNative: number
    investmentTokenAddress: number
    profitPercentageAmount: number
    chainId: number
    isExecuted: number
    voteFor: number
    voteAgainst: number
    totalVoters: number
    Status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PitchAvgAggregateInputType = {
    initialInvestment?: true
    profitAmountEstimation?: true
    profitPercentageAmount?: true
    chainId?: true
    voteFor?: true
    voteAgainst?: true
    totalVoters?: true
  }

  export type PitchSumAggregateInputType = {
    initialInvestment?: true
    profitAmountEstimation?: true
    profitPercentageAmount?: true
    chainId?: true
    voteFor?: true
    voteAgainst?: true
    totalVoters?: true
  }

  export type PitchMinAggregateInputType = {
    id?: true
    userId?: true
    investmentId?: true
    title?: true
    description?: true
    deadline?: true
    initialInvestment?: true
    profitAmountEstimation?: true
    isNative?: true
    investmentTokenAddress?: true
    profitPercentageAmount?: true
    chainId?: true
    isExecuted?: true
    voteFor?: true
    voteAgainst?: true
    totalVoters?: true
    Status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PitchMaxAggregateInputType = {
    id?: true
    userId?: true
    investmentId?: true
    title?: true
    description?: true
    deadline?: true
    initialInvestment?: true
    profitAmountEstimation?: true
    isNative?: true
    investmentTokenAddress?: true
    profitPercentageAmount?: true
    chainId?: true
    isExecuted?: true
    voteFor?: true
    voteAgainst?: true
    totalVoters?: true
    Status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PitchCountAggregateInputType = {
    id?: true
    userId?: true
    investmentId?: true
    title?: true
    description?: true
    deadline?: true
    initialInvestment?: true
    profitAmountEstimation?: true
    isNative?: true
    investmentTokenAddress?: true
    profitPercentageAmount?: true
    chainId?: true
    isExecuted?: true
    voteFor?: true
    voteAgainst?: true
    totalVoters?: true
    Status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PitchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pitch to aggregate.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pitches
    **/
    _count?: true | PitchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PitchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PitchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PitchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PitchMaxAggregateInputType
  }

  export type GetPitchAggregateType<T extends PitchAggregateArgs> = {
        [P in keyof T & keyof AggregatePitch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePitch[P]>
      : GetScalarType<T[P], AggregatePitch[P]>
  }




  export type PitchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchWhereInput
    orderBy?: PitchOrderByWithAggregationInput | PitchOrderByWithAggregationInput[]
    by: PitchScalarFieldEnum[] | PitchScalarFieldEnum
    having?: PitchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PitchCountAggregateInputType | true
    _avg?: PitchAvgAggregateInputType
    _sum?: PitchSumAggregateInputType
    _min?: PitchMinAggregateInputType
    _max?: PitchMaxAggregateInputType
  }

  export type PitchGroupByOutputType = {
    id: string
    userId: string
    investmentId: string
    title: string
    description: string
    deadline: Date
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor: number
    voteAgainst: number
    totalVoters: number
    Status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: PitchCountAggregateOutputType | null
    _avg: PitchAvgAggregateOutputType | null
    _sum: PitchSumAggregateOutputType | null
    _min: PitchMinAggregateOutputType | null
    _max: PitchMaxAggregateOutputType | null
  }

  type GetPitchGroupByPayload<T extends PitchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PitchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PitchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PitchGroupByOutputType[P]>
            : GetScalarType<T[P], PitchGroupByOutputType[P]>
        }
      >
    >


  export type PitchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    initialInvestment?: boolean
    profitAmountEstimation?: boolean
    isNative?: boolean
    investmentTokenAddress?: boolean
    profitPercentageAmount?: boolean
    chainId?: boolean
    isExecuted?: boolean
    voteFor?: boolean
    voteAgainst?: boolean
    totalVoters?: boolean
    Status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitch"]>

  export type PitchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    initialInvestment?: boolean
    profitAmountEstimation?: boolean
    isNative?: boolean
    investmentTokenAddress?: boolean
    profitPercentageAmount?: boolean
    chainId?: boolean
    isExecuted?: boolean
    voteFor?: boolean
    voteAgainst?: boolean
    totalVoters?: boolean
    Status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitch"]>

  export type PitchSelectScalar = {
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    initialInvestment?: boolean
    profitAmountEstimation?: boolean
    isNative?: boolean
    investmentTokenAddress?: boolean
    profitPercentageAmount?: boolean
    chainId?: boolean
    isExecuted?: boolean
    voteFor?: boolean
    voteAgainst?: boolean
    totalVoters?: boolean
    Status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PitchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
  }
  export type PitchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
  }

  export type $PitchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pitch"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      investment: Prisma.$InvestmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      investmentId: string
      title: string
      description: string
      deadline: Date
      initialInvestment: number
      profitAmountEstimation: number
      isNative: boolean
      investmentTokenAddress: string | null
      profitPercentageAmount: number
      chainId: number
      isExecuted: boolean
      voteFor: number
      voteAgainst: number
      totalVoters: number
      Status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pitch"]>
    composites: {}
  }

  type PitchGetPayload<S extends boolean | null | undefined | PitchDefaultArgs> = $Result.GetResult<Prisma.$PitchPayload, S>

  type PitchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PitchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PitchCountAggregateInputType | true
    }

  export interface PitchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pitch'], meta: { name: 'Pitch' } }
    /**
     * Find zero or one Pitch that matches the filter.
     * @param {PitchFindUniqueArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PitchFindUniqueArgs>(args: SelectSubset<T, PitchFindUniqueArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pitch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PitchFindUniqueOrThrowArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PitchFindUniqueOrThrowArgs>(args: SelectSubset<T, PitchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pitch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchFindFirstArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PitchFindFirstArgs>(args?: SelectSubset<T, PitchFindFirstArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pitch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchFindFirstOrThrowArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PitchFindFirstOrThrowArgs>(args?: SelectSubset<T, PitchFindFirstOrThrowArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pitches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pitches
     * const pitches = await prisma.pitch.findMany()
     * 
     * // Get first 10 Pitches
     * const pitches = await prisma.pitch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pitchWithIdOnly = await prisma.pitch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PitchFindManyArgs>(args?: SelectSubset<T, PitchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pitch.
     * @param {PitchCreateArgs} args - Arguments to create a Pitch.
     * @example
     * // Create one Pitch
     * const Pitch = await prisma.pitch.create({
     *   data: {
     *     // ... data to create a Pitch
     *   }
     * })
     * 
     */
    create<T extends PitchCreateArgs>(args: SelectSubset<T, PitchCreateArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pitches.
     * @param {PitchCreateManyArgs} args - Arguments to create many Pitches.
     * @example
     * // Create many Pitches
     * const pitch = await prisma.pitch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PitchCreateManyArgs>(args?: SelectSubset<T, PitchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pitches and returns the data saved in the database.
     * @param {PitchCreateManyAndReturnArgs} args - Arguments to create many Pitches.
     * @example
     * // Create many Pitches
     * const pitch = await prisma.pitch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pitches and only return the `id`
     * const pitchWithIdOnly = await prisma.pitch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PitchCreateManyAndReturnArgs>(args?: SelectSubset<T, PitchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pitch.
     * @param {PitchDeleteArgs} args - Arguments to delete one Pitch.
     * @example
     * // Delete one Pitch
     * const Pitch = await prisma.pitch.delete({
     *   where: {
     *     // ... filter to delete one Pitch
     *   }
     * })
     * 
     */
    delete<T extends PitchDeleteArgs>(args: SelectSubset<T, PitchDeleteArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pitch.
     * @param {PitchUpdateArgs} args - Arguments to update one Pitch.
     * @example
     * // Update one Pitch
     * const pitch = await prisma.pitch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PitchUpdateArgs>(args: SelectSubset<T, PitchUpdateArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pitches.
     * @param {PitchDeleteManyArgs} args - Arguments to filter Pitches to delete.
     * @example
     * // Delete a few Pitches
     * const { count } = await prisma.pitch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PitchDeleteManyArgs>(args?: SelectSubset<T, PitchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pitches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pitches
     * const pitch = await prisma.pitch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PitchUpdateManyArgs>(args: SelectSubset<T, PitchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pitch.
     * @param {PitchUpsertArgs} args - Arguments to update or create a Pitch.
     * @example
     * // Update or create a Pitch
     * const pitch = await prisma.pitch.upsert({
     *   create: {
     *     // ... data to create a Pitch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pitch we want to update
     *   }
     * })
     */
    upsert<T extends PitchUpsertArgs>(args: SelectSubset<T, PitchUpsertArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pitches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchCountArgs} args - Arguments to filter Pitches to count.
     * @example
     * // Count the number of Pitches
     * const count = await prisma.pitch.count({
     *   where: {
     *     // ... the filter for the Pitches we want to count
     *   }
     * })
    **/
    count<T extends PitchCountArgs>(
      args?: Subset<T, PitchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PitchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pitch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PitchAggregateArgs>(args: Subset<T, PitchAggregateArgs>): Prisma.PrismaPromise<GetPitchAggregateType<T>>

    /**
     * Group by Pitch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PitchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PitchGroupByArgs['orderBy'] }
        : { orderBy?: PitchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PitchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPitchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pitch model
   */
  readonly fields: PitchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pitch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PitchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    investment<T extends InvestmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentDefaultArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pitch model
   */ 
  interface PitchFieldRefs {
    readonly id: FieldRef<"Pitch", 'String'>
    readonly userId: FieldRef<"Pitch", 'String'>
    readonly investmentId: FieldRef<"Pitch", 'String'>
    readonly title: FieldRef<"Pitch", 'String'>
    readonly description: FieldRef<"Pitch", 'String'>
    readonly deadline: FieldRef<"Pitch", 'DateTime'>
    readonly initialInvestment: FieldRef<"Pitch", 'Int'>
    readonly profitAmountEstimation: FieldRef<"Pitch", 'Int'>
    readonly isNative: FieldRef<"Pitch", 'Boolean'>
    readonly investmentTokenAddress: FieldRef<"Pitch", 'String'>
    readonly profitPercentageAmount: FieldRef<"Pitch", 'Int'>
    readonly chainId: FieldRef<"Pitch", 'Int'>
    readonly isExecuted: FieldRef<"Pitch", 'Boolean'>
    readonly voteFor: FieldRef<"Pitch", 'Int'>
    readonly voteAgainst: FieldRef<"Pitch", 'Int'>
    readonly totalVoters: FieldRef<"Pitch", 'Int'>
    readonly Status: FieldRef<"Pitch", 'Status'>
    readonly createdAt: FieldRef<"Pitch", 'DateTime'>
    readonly updatedAt: FieldRef<"Pitch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pitch findUnique
   */
  export type PitchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch findUniqueOrThrow
   */
  export type PitchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch findFirst
   */
  export type PitchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pitches.
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pitches.
     */
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Pitch findFirstOrThrow
   */
  export type PitchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pitches.
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pitches.
     */
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Pitch findMany
   */
  export type PitchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitches to fetch.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pitches.
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Pitch create
   */
  export type PitchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * The data needed to create a Pitch.
     */
    data: XOR<PitchCreateInput, PitchUncheckedCreateInput>
  }

  /**
   * Pitch createMany
   */
  export type PitchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pitches.
     */
    data: PitchCreateManyInput | PitchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pitch createManyAndReturn
   */
  export type PitchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pitches.
     */
    data: PitchCreateManyInput | PitchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pitch update
   */
  export type PitchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * The data needed to update a Pitch.
     */
    data: XOR<PitchUpdateInput, PitchUncheckedUpdateInput>
    /**
     * Choose, which Pitch to update.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch updateMany
   */
  export type PitchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pitches.
     */
    data: XOR<PitchUpdateManyMutationInput, PitchUncheckedUpdateManyInput>
    /**
     * Filter which Pitches to update
     */
    where?: PitchWhereInput
  }

  /**
   * Pitch upsert
   */
  export type PitchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * The filter to search for the Pitch to update in case it exists.
     */
    where: PitchWhereUniqueInput
    /**
     * In case the Pitch found by the `where` argument doesn't exist, create a new Pitch with this data.
     */
    create: XOR<PitchCreateInput, PitchUncheckedCreateInput>
    /**
     * In case the Pitch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PitchUpdateInput, PitchUncheckedUpdateInput>
  }

  /**
   * Pitch delete
   */
  export type PitchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter which Pitch to delete.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch deleteMany
   */
  export type PitchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pitches to delete
     */
    where?: PitchWhereInput
  }

  /**
   * Pitch without action
   */
  export type PitchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
  }


  /**
   * Model Stake
   */

  export type AggregateStake = {
    _count: StakeCountAggregateOutputType | null
    _avg: StakeAvgAggregateOutputType | null
    _sum: StakeSumAggregateOutputType | null
    _min: StakeMinAggregateOutputType | null
    _max: StakeMaxAggregateOutputType | null
  }

  export type StakeAvgAggregateOutputType = {
    stake: number | null
    chainId: number | null
  }

  export type StakeSumAggregateOutputType = {
    stake: number | null
    chainId: number | null
  }

  export type StakeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    investmentId: string | null
    stake: number | null
    chainId: number | null
    createdAt: Date | null
  }

  export type StakeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    investmentId: string | null
    stake: number | null
    chainId: number | null
    createdAt: Date | null
  }

  export type StakeCountAggregateOutputType = {
    id: number
    userId: number
    investmentId: number
    stake: number
    chainId: number
    createdAt: number
    _all: number
  }


  export type StakeAvgAggregateInputType = {
    stake?: true
    chainId?: true
  }

  export type StakeSumAggregateInputType = {
    stake?: true
    chainId?: true
  }

  export type StakeMinAggregateInputType = {
    id?: true
    userId?: true
    investmentId?: true
    stake?: true
    chainId?: true
    createdAt?: true
  }

  export type StakeMaxAggregateInputType = {
    id?: true
    userId?: true
    investmentId?: true
    stake?: true
    chainId?: true
    createdAt?: true
  }

  export type StakeCountAggregateInputType = {
    id?: true
    userId?: true
    investmentId?: true
    stake?: true
    chainId?: true
    createdAt?: true
    _all?: true
  }

  export type StakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stake to aggregate.
     */
    where?: StakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakes to fetch.
     */
    orderBy?: StakeOrderByWithRelationInput | StakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stakes
    **/
    _count?: true | StakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StakeMaxAggregateInputType
  }

  export type GetStakeAggregateType<T extends StakeAggregateArgs> = {
        [P in keyof T & keyof AggregateStake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStake[P]>
      : GetScalarType<T[P], AggregateStake[P]>
  }




  export type StakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StakeWhereInput
    orderBy?: StakeOrderByWithAggregationInput | StakeOrderByWithAggregationInput[]
    by: StakeScalarFieldEnum[] | StakeScalarFieldEnum
    having?: StakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StakeCountAggregateInputType | true
    _avg?: StakeAvgAggregateInputType
    _sum?: StakeSumAggregateInputType
    _min?: StakeMinAggregateInputType
    _max?: StakeMaxAggregateInputType
  }

  export type StakeGroupByOutputType = {
    id: string
    userId: string
    investmentId: string
    stake: number
    chainId: number
    createdAt: Date
    _count: StakeCountAggregateOutputType | null
    _avg: StakeAvgAggregateOutputType | null
    _sum: StakeSumAggregateOutputType | null
    _min: StakeMinAggregateOutputType | null
    _max: StakeMaxAggregateOutputType | null
  }

  type GetStakeGroupByPayload<T extends StakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StakeGroupByOutputType[P]>
            : GetScalarType<T[P], StakeGroupByOutputType[P]>
        }
      >
    >


  export type StakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    stake?: boolean
    chainId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stake"]>

  export type StakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    stake?: boolean
    chainId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stake"]>

  export type StakeSelectScalar = {
    id?: boolean
    userId?: boolean
    investmentId?: boolean
    stake?: boolean
    chainId?: boolean
    createdAt?: boolean
  }

  export type StakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
  }
  export type StakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    investment?: boolean | InvestmentDefaultArgs<ExtArgs>
  }

  export type $StakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stake"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      investment: Prisma.$InvestmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      investmentId: string
      stake: number
      chainId: number
      createdAt: Date
    }, ExtArgs["result"]["stake"]>
    composites: {}
  }

  type StakeGetPayload<S extends boolean | null | undefined | StakeDefaultArgs> = $Result.GetResult<Prisma.$StakePayload, S>

  type StakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StakeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StakeCountAggregateInputType | true
    }

  export interface StakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stake'], meta: { name: 'Stake' } }
    /**
     * Find zero or one Stake that matches the filter.
     * @param {StakeFindUniqueArgs} args - Arguments to find a Stake
     * @example
     * // Get one Stake
     * const stake = await prisma.stake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StakeFindUniqueArgs>(args: SelectSubset<T, StakeFindUniqueArgs<ExtArgs>>): Prisma__StakeClient<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stake that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StakeFindUniqueOrThrowArgs} args - Arguments to find a Stake
     * @example
     * // Get one Stake
     * const stake = await prisma.stake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StakeFindUniqueOrThrowArgs>(args: SelectSubset<T, StakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StakeClient<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeFindFirstArgs} args - Arguments to find a Stake
     * @example
     * // Get one Stake
     * const stake = await prisma.stake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StakeFindFirstArgs>(args?: SelectSubset<T, StakeFindFirstArgs<ExtArgs>>): Prisma__StakeClient<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeFindFirstOrThrowArgs} args - Arguments to find a Stake
     * @example
     * // Get one Stake
     * const stake = await prisma.stake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StakeFindFirstOrThrowArgs>(args?: SelectSubset<T, StakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StakeClient<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stakes
     * const stakes = await prisma.stake.findMany()
     * 
     * // Get first 10 Stakes
     * const stakes = await prisma.stake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stakeWithIdOnly = await prisma.stake.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StakeFindManyArgs>(args?: SelectSubset<T, StakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stake.
     * @param {StakeCreateArgs} args - Arguments to create a Stake.
     * @example
     * // Create one Stake
     * const Stake = await prisma.stake.create({
     *   data: {
     *     // ... data to create a Stake
     *   }
     * })
     * 
     */
    create<T extends StakeCreateArgs>(args: SelectSubset<T, StakeCreateArgs<ExtArgs>>): Prisma__StakeClient<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stakes.
     * @param {StakeCreateManyArgs} args - Arguments to create many Stakes.
     * @example
     * // Create many Stakes
     * const stake = await prisma.stake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StakeCreateManyArgs>(args?: SelectSubset<T, StakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stakes and returns the data saved in the database.
     * @param {StakeCreateManyAndReturnArgs} args - Arguments to create many Stakes.
     * @example
     * // Create many Stakes
     * const stake = await prisma.stake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stakes and only return the `id`
     * const stakeWithIdOnly = await prisma.stake.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StakeCreateManyAndReturnArgs>(args?: SelectSubset<T, StakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Stake.
     * @param {StakeDeleteArgs} args - Arguments to delete one Stake.
     * @example
     * // Delete one Stake
     * const Stake = await prisma.stake.delete({
     *   where: {
     *     // ... filter to delete one Stake
     *   }
     * })
     * 
     */
    delete<T extends StakeDeleteArgs>(args: SelectSubset<T, StakeDeleteArgs<ExtArgs>>): Prisma__StakeClient<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stake.
     * @param {StakeUpdateArgs} args - Arguments to update one Stake.
     * @example
     * // Update one Stake
     * const stake = await prisma.stake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StakeUpdateArgs>(args: SelectSubset<T, StakeUpdateArgs<ExtArgs>>): Prisma__StakeClient<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stakes.
     * @param {StakeDeleteManyArgs} args - Arguments to filter Stakes to delete.
     * @example
     * // Delete a few Stakes
     * const { count } = await prisma.stake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StakeDeleteManyArgs>(args?: SelectSubset<T, StakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stakes
     * const stake = await prisma.stake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StakeUpdateManyArgs>(args: SelectSubset<T, StakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stake.
     * @param {StakeUpsertArgs} args - Arguments to update or create a Stake.
     * @example
     * // Update or create a Stake
     * const stake = await prisma.stake.upsert({
     *   create: {
     *     // ... data to create a Stake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stake we want to update
     *   }
     * })
     */
    upsert<T extends StakeUpsertArgs>(args: SelectSubset<T, StakeUpsertArgs<ExtArgs>>): Prisma__StakeClient<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeCountArgs} args - Arguments to filter Stakes to count.
     * @example
     * // Count the number of Stakes
     * const count = await prisma.stake.count({
     *   where: {
     *     // ... the filter for the Stakes we want to count
     *   }
     * })
    **/
    count<T extends StakeCountArgs>(
      args?: Subset<T, StakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StakeAggregateArgs>(args: Subset<T, StakeAggregateArgs>): Prisma.PrismaPromise<GetStakeAggregateType<T>>

    /**
     * Group by Stake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StakeGroupByArgs['orderBy'] }
        : { orderBy?: StakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stake model
   */
  readonly fields: StakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    investment<T extends InvestmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentDefaultArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stake model
   */ 
  interface StakeFieldRefs {
    readonly id: FieldRef<"Stake", 'String'>
    readonly userId: FieldRef<"Stake", 'String'>
    readonly investmentId: FieldRef<"Stake", 'String'>
    readonly stake: FieldRef<"Stake", 'Int'>
    readonly chainId: FieldRef<"Stake", 'Int'>
    readonly createdAt: FieldRef<"Stake", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stake findUnique
   */
  export type StakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    /**
     * Filter, which Stake to fetch.
     */
    where: StakeWhereUniqueInput
  }

  /**
   * Stake findUniqueOrThrow
   */
  export type StakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    /**
     * Filter, which Stake to fetch.
     */
    where: StakeWhereUniqueInput
  }

  /**
   * Stake findFirst
   */
  export type StakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    /**
     * Filter, which Stake to fetch.
     */
    where?: StakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakes to fetch.
     */
    orderBy?: StakeOrderByWithRelationInput | StakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stakes.
     */
    cursor?: StakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stakes.
     */
    distinct?: StakeScalarFieldEnum | StakeScalarFieldEnum[]
  }

  /**
   * Stake findFirstOrThrow
   */
  export type StakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    /**
     * Filter, which Stake to fetch.
     */
    where?: StakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakes to fetch.
     */
    orderBy?: StakeOrderByWithRelationInput | StakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stakes.
     */
    cursor?: StakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stakes.
     */
    distinct?: StakeScalarFieldEnum | StakeScalarFieldEnum[]
  }

  /**
   * Stake findMany
   */
  export type StakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    /**
     * Filter, which Stakes to fetch.
     */
    where?: StakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stakes to fetch.
     */
    orderBy?: StakeOrderByWithRelationInput | StakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stakes.
     */
    cursor?: StakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stakes.
     */
    skip?: number
    distinct?: StakeScalarFieldEnum | StakeScalarFieldEnum[]
  }

  /**
   * Stake create
   */
  export type StakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    /**
     * The data needed to create a Stake.
     */
    data: XOR<StakeCreateInput, StakeUncheckedCreateInput>
  }

  /**
   * Stake createMany
   */
  export type StakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stakes.
     */
    data: StakeCreateManyInput | StakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stake createManyAndReturn
   */
  export type StakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stakes.
     */
    data: StakeCreateManyInput | StakeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stake update
   */
  export type StakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    /**
     * The data needed to update a Stake.
     */
    data: XOR<StakeUpdateInput, StakeUncheckedUpdateInput>
    /**
     * Choose, which Stake to update.
     */
    where: StakeWhereUniqueInput
  }

  /**
   * Stake updateMany
   */
  export type StakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stakes.
     */
    data: XOR<StakeUpdateManyMutationInput, StakeUncheckedUpdateManyInput>
    /**
     * Filter which Stakes to update
     */
    where?: StakeWhereInput
  }

  /**
   * Stake upsert
   */
  export type StakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    /**
     * The filter to search for the Stake to update in case it exists.
     */
    where: StakeWhereUniqueInput
    /**
     * In case the Stake found by the `where` argument doesn't exist, create a new Stake with this data.
     */
    create: XOR<StakeCreateInput, StakeUncheckedCreateInput>
    /**
     * In case the Stake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StakeUpdateInput, StakeUncheckedUpdateInput>
  }

  /**
   * Stake delete
   */
  export type StakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    /**
     * Filter which Stake to delete.
     */
    where: StakeWhereUniqueInput
  }

  /**
   * Stake deleteMany
   */
  export type StakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stakes to delete
     */
    where?: StakeWhereInput
  }

  /**
   * Stake without action
   */
  export type StakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    chainId: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    chainId: number[]
  }

  export type InvestmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    image: string | null
    tokenAddress: string | null
    tokenSymbol: string | null
    tokenName: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    image: string | null
    tokenAddress: string | null
    tokenSymbol: string | null
    tokenName: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    userId: number
    accounts: number
    title: number
    description: number
    image: number
    tokenAddress: number
    tokenSymbol: number
    tokenName: number
    chainId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    chainId?: true
  }

  export type InvestmentSumAggregateInputType = {
    chainId?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    image?: true
    tokenAddress?: true
    tokenSymbol?: true
    tokenName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    image?: true
    tokenAddress?: true
    tokenSymbol?: true
    tokenName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    userId?: true
    accounts?: true
    title?: true
    description?: true
    image?: true
    tokenAddress?: true
    tokenSymbol?: true
    tokenName?: true
    chainId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: string
    userId: string
    accounts: string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId: number[]
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accounts?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    chainId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    partners?: boolean | Investment$partnersArgs<ExtArgs>
    pitches?: boolean | Investment$pitchesArgs<ExtArgs>
    _count?: boolean | InvestmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accounts?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    chainId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    userId?: boolean
    accounts?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    chainId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    partners?: boolean | Investment$partnersArgs<ExtArgs>
    pitches?: boolean | Investment$pitchesArgs<ExtArgs>
    _count?: boolean | InvestmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      partners: Prisma.$StakePayload<ExtArgs>[]
      pitches: Prisma.$PitchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accounts: string[]
      title: string
      description: string
      image: string
      tokenAddress: string
      tokenSymbol: string
      tokenName: string
      chainId: number[]
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    partners<T extends Investment$partnersArgs<ExtArgs> = {}>(args?: Subset<T, Investment$partnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StakePayload<ExtArgs>, T, "findMany"> | Null>
    pitches<T extends Investment$pitchesArgs<ExtArgs> = {}>(args?: Subset<T, Investment$pitchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investment model
   */ 
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'String'>
    readonly userId: FieldRef<"Investment", 'String'>
    readonly accounts: FieldRef<"Investment", 'String[]'>
    readonly title: FieldRef<"Investment", 'String'>
    readonly description: FieldRef<"Investment", 'String'>
    readonly image: FieldRef<"Investment", 'String'>
    readonly tokenAddress: FieldRef<"Investment", 'String'>
    readonly tokenSymbol: FieldRef<"Investment", 'String'>
    readonly tokenName: FieldRef<"Investment", 'String'>
    readonly chainId: FieldRef<"Investment", 'Int[]'>
    readonly status: FieldRef<"Investment", 'Status'>
    readonly createdAt: FieldRef<"Investment", 'DateTime'>
    readonly updatedAt: FieldRef<"Investment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
  }

  /**
   * Investment.partners
   */
  export type Investment$partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stake
     */
    select?: StakeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StakeInclude<ExtArgs> | null
    where?: StakeWhereInput
    orderBy?: StakeOrderByWithRelationInput | StakeOrderByWithRelationInput[]
    cursor?: StakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StakeScalarFieldEnum | StakeScalarFieldEnum[]
  }

  /**
   * Investment.pitches
   */
  export type Investment$pitchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    where?: PitchWhereInput
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    cursor?: PitchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Model CurrentLiquidity
   */

  export type AggregateCurrentLiquidity = {
    _count: CurrentLiquidityCountAggregateOutputType | null
    _avg: CurrentLiquidityAvgAggregateOutputType | null
    _sum: CurrentLiquiditySumAggregateOutputType | null
    _min: CurrentLiquidityMinAggregateOutputType | null
    _max: CurrentLiquidityMaxAggregateOutputType | null
  }

  export type CurrentLiquidityAvgAggregateOutputType = {
    amount: number | null
  }

  export type CurrentLiquiditySumAggregateOutputType = {
    amount: number | null
  }

  export type CurrentLiquidityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenAddress: string | null
    isNative: boolean | null
    amount: number | null
  }

  export type CurrentLiquidityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenAddress: string | null
    isNative: boolean | null
    amount: number | null
  }

  export type CurrentLiquidityCountAggregateOutputType = {
    id: number
    userId: number
    tokenAddress: number
    isNative: number
    amount: number
    _all: number
  }


  export type CurrentLiquidityAvgAggregateInputType = {
    amount?: true
  }

  export type CurrentLiquiditySumAggregateInputType = {
    amount?: true
  }

  export type CurrentLiquidityMinAggregateInputType = {
    id?: true
    userId?: true
    tokenAddress?: true
    isNative?: true
    amount?: true
  }

  export type CurrentLiquidityMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenAddress?: true
    isNative?: true
    amount?: true
  }

  export type CurrentLiquidityCountAggregateInputType = {
    id?: true
    userId?: true
    tokenAddress?: true
    isNative?: true
    amount?: true
    _all?: true
  }

  export type CurrentLiquidityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrentLiquidity to aggregate.
     */
    where?: CurrentLiquidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentLiquidities to fetch.
     */
    orderBy?: CurrentLiquidityOrderByWithRelationInput | CurrentLiquidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrentLiquidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentLiquidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentLiquidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurrentLiquidities
    **/
    _count?: true | CurrentLiquidityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrentLiquidityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrentLiquiditySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrentLiquidityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrentLiquidityMaxAggregateInputType
  }

  export type GetCurrentLiquidityAggregateType<T extends CurrentLiquidityAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrentLiquidity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrentLiquidity[P]>
      : GetScalarType<T[P], AggregateCurrentLiquidity[P]>
  }




  export type CurrentLiquidityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrentLiquidityWhereInput
    orderBy?: CurrentLiquidityOrderByWithAggregationInput | CurrentLiquidityOrderByWithAggregationInput[]
    by: CurrentLiquidityScalarFieldEnum[] | CurrentLiquidityScalarFieldEnum
    having?: CurrentLiquidityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrentLiquidityCountAggregateInputType | true
    _avg?: CurrentLiquidityAvgAggregateInputType
    _sum?: CurrentLiquiditySumAggregateInputType
    _min?: CurrentLiquidityMinAggregateInputType
    _max?: CurrentLiquidityMaxAggregateInputType
  }

  export type CurrentLiquidityGroupByOutputType = {
    id: string
    userId: string
    tokenAddress: string | null
    isNative: boolean
    amount: number
    _count: CurrentLiquidityCountAggregateOutputType | null
    _avg: CurrentLiquidityAvgAggregateOutputType | null
    _sum: CurrentLiquiditySumAggregateOutputType | null
    _min: CurrentLiquidityMinAggregateOutputType | null
    _max: CurrentLiquidityMaxAggregateOutputType | null
  }

  type GetCurrentLiquidityGroupByPayload<T extends CurrentLiquidityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrentLiquidityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrentLiquidityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrentLiquidityGroupByOutputType[P]>
            : GetScalarType<T[P], CurrentLiquidityGroupByOutputType[P]>
        }
      >
    >


  export type CurrentLiquiditySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenAddress?: boolean
    isNative?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currentLiquidity"]>

  export type CurrentLiquiditySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenAddress?: boolean
    isNative?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currentLiquidity"]>

  export type CurrentLiquiditySelectScalar = {
    id?: boolean
    userId?: boolean
    tokenAddress?: boolean
    isNative?: boolean
    amount?: boolean
  }

  export type CurrentLiquidityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CurrentLiquidityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CurrentLiquidityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurrentLiquidity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenAddress: string | null
      isNative: boolean
      amount: number
    }, ExtArgs["result"]["currentLiquidity"]>
    composites: {}
  }

  type CurrentLiquidityGetPayload<S extends boolean | null | undefined | CurrentLiquidityDefaultArgs> = $Result.GetResult<Prisma.$CurrentLiquidityPayload, S>

  type CurrentLiquidityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CurrentLiquidityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CurrentLiquidityCountAggregateInputType | true
    }

  export interface CurrentLiquidityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurrentLiquidity'], meta: { name: 'CurrentLiquidity' } }
    /**
     * Find zero or one CurrentLiquidity that matches the filter.
     * @param {CurrentLiquidityFindUniqueArgs} args - Arguments to find a CurrentLiquidity
     * @example
     * // Get one CurrentLiquidity
     * const currentLiquidity = await prisma.currentLiquidity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrentLiquidityFindUniqueArgs>(args: SelectSubset<T, CurrentLiquidityFindUniqueArgs<ExtArgs>>): Prisma__CurrentLiquidityClient<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CurrentLiquidity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CurrentLiquidityFindUniqueOrThrowArgs} args - Arguments to find a CurrentLiquidity
     * @example
     * // Get one CurrentLiquidity
     * const currentLiquidity = await prisma.currentLiquidity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrentLiquidityFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrentLiquidityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrentLiquidityClient<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CurrentLiquidity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentLiquidityFindFirstArgs} args - Arguments to find a CurrentLiquidity
     * @example
     * // Get one CurrentLiquidity
     * const currentLiquidity = await prisma.currentLiquidity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrentLiquidityFindFirstArgs>(args?: SelectSubset<T, CurrentLiquidityFindFirstArgs<ExtArgs>>): Prisma__CurrentLiquidityClient<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CurrentLiquidity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentLiquidityFindFirstOrThrowArgs} args - Arguments to find a CurrentLiquidity
     * @example
     * // Get one CurrentLiquidity
     * const currentLiquidity = await prisma.currentLiquidity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrentLiquidityFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrentLiquidityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrentLiquidityClient<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CurrentLiquidities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentLiquidityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurrentLiquidities
     * const currentLiquidities = await prisma.currentLiquidity.findMany()
     * 
     * // Get first 10 CurrentLiquidities
     * const currentLiquidities = await prisma.currentLiquidity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currentLiquidityWithIdOnly = await prisma.currentLiquidity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrentLiquidityFindManyArgs>(args?: SelectSubset<T, CurrentLiquidityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CurrentLiquidity.
     * @param {CurrentLiquidityCreateArgs} args - Arguments to create a CurrentLiquidity.
     * @example
     * // Create one CurrentLiquidity
     * const CurrentLiquidity = await prisma.currentLiquidity.create({
     *   data: {
     *     // ... data to create a CurrentLiquidity
     *   }
     * })
     * 
     */
    create<T extends CurrentLiquidityCreateArgs>(args: SelectSubset<T, CurrentLiquidityCreateArgs<ExtArgs>>): Prisma__CurrentLiquidityClient<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CurrentLiquidities.
     * @param {CurrentLiquidityCreateManyArgs} args - Arguments to create many CurrentLiquidities.
     * @example
     * // Create many CurrentLiquidities
     * const currentLiquidity = await prisma.currentLiquidity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrentLiquidityCreateManyArgs>(args?: SelectSubset<T, CurrentLiquidityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurrentLiquidities and returns the data saved in the database.
     * @param {CurrentLiquidityCreateManyAndReturnArgs} args - Arguments to create many CurrentLiquidities.
     * @example
     * // Create many CurrentLiquidities
     * const currentLiquidity = await prisma.currentLiquidity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurrentLiquidities and only return the `id`
     * const currentLiquidityWithIdOnly = await prisma.currentLiquidity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrentLiquidityCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrentLiquidityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CurrentLiquidity.
     * @param {CurrentLiquidityDeleteArgs} args - Arguments to delete one CurrentLiquidity.
     * @example
     * // Delete one CurrentLiquidity
     * const CurrentLiquidity = await prisma.currentLiquidity.delete({
     *   where: {
     *     // ... filter to delete one CurrentLiquidity
     *   }
     * })
     * 
     */
    delete<T extends CurrentLiquidityDeleteArgs>(args: SelectSubset<T, CurrentLiquidityDeleteArgs<ExtArgs>>): Prisma__CurrentLiquidityClient<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CurrentLiquidity.
     * @param {CurrentLiquidityUpdateArgs} args - Arguments to update one CurrentLiquidity.
     * @example
     * // Update one CurrentLiquidity
     * const currentLiquidity = await prisma.currentLiquidity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrentLiquidityUpdateArgs>(args: SelectSubset<T, CurrentLiquidityUpdateArgs<ExtArgs>>): Prisma__CurrentLiquidityClient<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CurrentLiquidities.
     * @param {CurrentLiquidityDeleteManyArgs} args - Arguments to filter CurrentLiquidities to delete.
     * @example
     * // Delete a few CurrentLiquidities
     * const { count } = await prisma.currentLiquidity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrentLiquidityDeleteManyArgs>(args?: SelectSubset<T, CurrentLiquidityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrentLiquidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentLiquidityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurrentLiquidities
     * const currentLiquidity = await prisma.currentLiquidity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrentLiquidityUpdateManyArgs>(args: SelectSubset<T, CurrentLiquidityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CurrentLiquidity.
     * @param {CurrentLiquidityUpsertArgs} args - Arguments to update or create a CurrentLiquidity.
     * @example
     * // Update or create a CurrentLiquidity
     * const currentLiquidity = await prisma.currentLiquidity.upsert({
     *   create: {
     *     // ... data to create a CurrentLiquidity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurrentLiquidity we want to update
     *   }
     * })
     */
    upsert<T extends CurrentLiquidityUpsertArgs>(args: SelectSubset<T, CurrentLiquidityUpsertArgs<ExtArgs>>): Prisma__CurrentLiquidityClient<$Result.GetResult<Prisma.$CurrentLiquidityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CurrentLiquidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentLiquidityCountArgs} args - Arguments to filter CurrentLiquidities to count.
     * @example
     * // Count the number of CurrentLiquidities
     * const count = await prisma.currentLiquidity.count({
     *   where: {
     *     // ... the filter for the CurrentLiquidities we want to count
     *   }
     * })
    **/
    count<T extends CurrentLiquidityCountArgs>(
      args?: Subset<T, CurrentLiquidityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrentLiquidityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurrentLiquidity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentLiquidityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrentLiquidityAggregateArgs>(args: Subset<T, CurrentLiquidityAggregateArgs>): Prisma.PrismaPromise<GetCurrentLiquidityAggregateType<T>>

    /**
     * Group by CurrentLiquidity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentLiquidityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrentLiquidityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrentLiquidityGroupByArgs['orderBy'] }
        : { orderBy?: CurrentLiquidityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrentLiquidityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrentLiquidityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurrentLiquidity model
   */
  readonly fields: CurrentLiquidityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurrentLiquidity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrentLiquidityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CurrentLiquidity model
   */ 
  interface CurrentLiquidityFieldRefs {
    readonly id: FieldRef<"CurrentLiquidity", 'String'>
    readonly userId: FieldRef<"CurrentLiquidity", 'String'>
    readonly tokenAddress: FieldRef<"CurrentLiquidity", 'String'>
    readonly isNative: FieldRef<"CurrentLiquidity", 'Boolean'>
    readonly amount: FieldRef<"CurrentLiquidity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CurrentLiquidity findUnique
   */
  export type CurrentLiquidityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which CurrentLiquidity to fetch.
     */
    where: CurrentLiquidityWhereUniqueInput
  }

  /**
   * CurrentLiquidity findUniqueOrThrow
   */
  export type CurrentLiquidityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which CurrentLiquidity to fetch.
     */
    where: CurrentLiquidityWhereUniqueInput
  }

  /**
   * CurrentLiquidity findFirst
   */
  export type CurrentLiquidityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which CurrentLiquidity to fetch.
     */
    where?: CurrentLiquidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentLiquidities to fetch.
     */
    orderBy?: CurrentLiquidityOrderByWithRelationInput | CurrentLiquidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrentLiquidities.
     */
    cursor?: CurrentLiquidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentLiquidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentLiquidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrentLiquidities.
     */
    distinct?: CurrentLiquidityScalarFieldEnum | CurrentLiquidityScalarFieldEnum[]
  }

  /**
   * CurrentLiquidity findFirstOrThrow
   */
  export type CurrentLiquidityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which CurrentLiquidity to fetch.
     */
    where?: CurrentLiquidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentLiquidities to fetch.
     */
    orderBy?: CurrentLiquidityOrderByWithRelationInput | CurrentLiquidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrentLiquidities.
     */
    cursor?: CurrentLiquidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentLiquidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentLiquidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrentLiquidities.
     */
    distinct?: CurrentLiquidityScalarFieldEnum | CurrentLiquidityScalarFieldEnum[]
  }

  /**
   * CurrentLiquidity findMany
   */
  export type CurrentLiquidityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which CurrentLiquidities to fetch.
     */
    where?: CurrentLiquidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentLiquidities to fetch.
     */
    orderBy?: CurrentLiquidityOrderByWithRelationInput | CurrentLiquidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurrentLiquidities.
     */
    cursor?: CurrentLiquidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentLiquidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentLiquidities.
     */
    skip?: number
    distinct?: CurrentLiquidityScalarFieldEnum | CurrentLiquidityScalarFieldEnum[]
  }

  /**
   * CurrentLiquidity create
   */
  export type CurrentLiquidityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    /**
     * The data needed to create a CurrentLiquidity.
     */
    data: XOR<CurrentLiquidityCreateInput, CurrentLiquidityUncheckedCreateInput>
  }

  /**
   * CurrentLiquidity createMany
   */
  export type CurrentLiquidityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurrentLiquidities.
     */
    data: CurrentLiquidityCreateManyInput | CurrentLiquidityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurrentLiquidity createManyAndReturn
   */
  export type CurrentLiquidityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CurrentLiquidities.
     */
    data: CurrentLiquidityCreateManyInput | CurrentLiquidityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurrentLiquidity update
   */
  export type CurrentLiquidityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    /**
     * The data needed to update a CurrentLiquidity.
     */
    data: XOR<CurrentLiquidityUpdateInput, CurrentLiquidityUncheckedUpdateInput>
    /**
     * Choose, which CurrentLiquidity to update.
     */
    where: CurrentLiquidityWhereUniqueInput
  }

  /**
   * CurrentLiquidity updateMany
   */
  export type CurrentLiquidityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurrentLiquidities.
     */
    data: XOR<CurrentLiquidityUpdateManyMutationInput, CurrentLiquidityUncheckedUpdateManyInput>
    /**
     * Filter which CurrentLiquidities to update
     */
    where?: CurrentLiquidityWhereInput
  }

  /**
   * CurrentLiquidity upsert
   */
  export type CurrentLiquidityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    /**
     * The filter to search for the CurrentLiquidity to update in case it exists.
     */
    where: CurrentLiquidityWhereUniqueInput
    /**
     * In case the CurrentLiquidity found by the `where` argument doesn't exist, create a new CurrentLiquidity with this data.
     */
    create: XOR<CurrentLiquidityCreateInput, CurrentLiquidityUncheckedCreateInput>
    /**
     * In case the CurrentLiquidity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrentLiquidityUpdateInput, CurrentLiquidityUncheckedUpdateInput>
  }

  /**
   * CurrentLiquidity delete
   */
  export type CurrentLiquidityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
    /**
     * Filter which CurrentLiquidity to delete.
     */
    where: CurrentLiquidityWhereUniqueInput
  }

  /**
   * CurrentLiquidity deleteMany
   */
  export type CurrentLiquidityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrentLiquidities to delete
     */
    where?: CurrentLiquidityWhereInput
  }

  /**
   * CurrentLiquidity without action
   */
  export type CurrentLiquidityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentLiquidity
     */
    select?: CurrentLiquiditySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentLiquidityInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    totalWinners: number | null
    totalPrize: number | null
    chainId: number | null
  }

  export type CampaignSumAggregateOutputType = {
    totalWinners: number | null
    totalPrize: number | null
    chainId: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    image: string | null
    totalWinners: number | null
    totalPrize: number | null
    campaignStartDate: Date | null
    campaginEndDate: Date | null
    rewardType: $Enums.RewardsType | null
    isNative: boolean | null
    chainId: number | null
    tokenAddress: string | null
    tokenSymbol: string | null
    tokenName: string | null
    campaignPostImage: string | null
    campaignPostLink: string | null
    campaignPostVideo: string | null
    taskType: $Enums.TaskType | null
    particpationType: $Enums.ParticpationType | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    image: string | null
    totalWinners: number | null
    totalPrize: number | null
    campaignStartDate: Date | null
    campaginEndDate: Date | null
    rewardType: $Enums.RewardsType | null
    isNative: boolean | null
    chainId: number | null
    tokenAddress: string | null
    tokenSymbol: string | null
    tokenName: string | null
    campaignPostImage: string | null
    campaignPostLink: string | null
    campaignPostVideo: string | null
    taskType: $Enums.TaskType | null
    particpationType: $Enums.ParticpationType | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    description: number
    image: number
    totalWinners: number
    totalPrize: number
    campaignStartDate: number
    campaginEndDate: number
    rewardType: number
    isNative: number
    chainId: number
    tokenAddress: number
    tokenSymbol: number
    tokenName: number
    campaignPostImage: number
    campaignPostLink: number
    campaignPostVideo: number
    taskType: number
    particpationType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    totalWinners?: true
    totalPrize?: true
    chainId?: true
  }

  export type CampaignSumAggregateInputType = {
    totalWinners?: true
    totalPrize?: true
    chainId?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    image?: true
    totalWinners?: true
    totalPrize?: true
    campaignStartDate?: true
    campaginEndDate?: true
    rewardType?: true
    isNative?: true
    chainId?: true
    tokenAddress?: true
    tokenSymbol?: true
    tokenName?: true
    campaignPostImage?: true
    campaignPostLink?: true
    campaignPostVideo?: true
    taskType?: true
    particpationType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    image?: true
    totalWinners?: true
    totalPrize?: true
    campaignStartDate?: true
    campaginEndDate?: true
    rewardType?: true
    isNative?: true
    chainId?: true
    tokenAddress?: true
    tokenSymbol?: true
    tokenName?: true
    campaignPostImage?: true
    campaignPostLink?: true
    campaignPostVideo?: true
    taskType?: true
    particpationType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    image?: true
    totalWinners?: true
    totalPrize?: true
    campaignStartDate?: true
    campaginEndDate?: true
    rewardType?: true
    isNative?: true
    chainId?: true
    tokenAddress?: true
    tokenSymbol?: true
    tokenName?: true
    campaignPostImage?: true
    campaignPostLink?: true
    campaignPostVideo?: true
    taskType?: true
    particpationType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    description: string
    image: string
    totalWinners: number
    totalPrize: number
    campaignStartDate: Date
    campaginEndDate: Date
    rewardType: $Enums.RewardsType
    isNative: boolean
    chainId: number
    tokenAddress: string | null
    tokenSymbol: string | null
    tokenName: string | null
    campaignPostImage: string | null
    campaignPostLink: string | null
    campaignPostVideo: string | null
    taskType: $Enums.TaskType
    particpationType: $Enums.ParticpationType
    status: $Enums.CampaignStatus
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    totalWinners?: boolean
    totalPrize?: boolean
    campaignStartDate?: boolean
    campaginEndDate?: boolean
    rewardType?: boolean
    isNative?: boolean
    chainId?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    campaignPostImage?: boolean
    campaignPostLink?: boolean
    campaignPostVideo?: boolean
    taskType?: boolean
    particpationType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    campaignWinners?: boolean | Campaign$campaignWinnersArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    totalWinners?: boolean
    totalPrize?: boolean
    campaignStartDate?: boolean
    campaginEndDate?: boolean
    rewardType?: boolean
    isNative?: boolean
    chainId?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    campaignPostImage?: boolean
    campaignPostLink?: boolean
    campaignPostVideo?: boolean
    taskType?: boolean
    particpationType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    totalWinners?: boolean
    totalPrize?: boolean
    campaignStartDate?: boolean
    campaginEndDate?: boolean
    rewardType?: boolean
    isNative?: boolean
    chainId?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    tokenName?: boolean
    campaignPostImage?: boolean
    campaignPostLink?: boolean
    campaignPostVideo?: boolean
    taskType?: boolean
    particpationType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    campaignWinners?: boolean | Campaign$campaignWinnersArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      campaignWinners: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      description: string
      image: string
      totalWinners: number
      totalPrize: number
      campaignStartDate: Date
      campaginEndDate: Date
      rewardType: $Enums.RewardsType
      isNative: boolean
      chainId: number
      tokenAddress: string | null
      tokenSymbol: string | null
      tokenName: string | null
      campaignPostImage: string | null
      campaignPostLink: string | null
      campaignPostVideo: string | null
      taskType: $Enums.TaskType
      particpationType: $Enums.ParticpationType
      status: $Enums.CampaignStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    campaignWinners<T extends Campaign$campaignWinnersArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$campaignWinnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */ 
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly ownerId: FieldRef<"Campaign", 'String'>
    readonly title: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly image: FieldRef<"Campaign", 'String'>
    readonly totalWinners: FieldRef<"Campaign", 'Int'>
    readonly totalPrize: FieldRef<"Campaign", 'Int'>
    readonly campaignStartDate: FieldRef<"Campaign", 'DateTime'>
    readonly campaginEndDate: FieldRef<"Campaign", 'DateTime'>
    readonly rewardType: FieldRef<"Campaign", 'RewardsType'>
    readonly isNative: FieldRef<"Campaign", 'Boolean'>
    readonly chainId: FieldRef<"Campaign", 'Int'>
    readonly tokenAddress: FieldRef<"Campaign", 'String'>
    readonly tokenSymbol: FieldRef<"Campaign", 'String'>
    readonly tokenName: FieldRef<"Campaign", 'String'>
    readonly campaignPostImage: FieldRef<"Campaign", 'String'>
    readonly campaignPostLink: FieldRef<"Campaign", 'String'>
    readonly campaignPostVideo: FieldRef<"Campaign", 'String'>
    readonly taskType: FieldRef<"Campaign", 'TaskType'>
    readonly particpationType: FieldRef<"Campaign", 'ParticpationType'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign.campaignWinners
   */
  export type Campaign$campaignWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    walletAddress: 'walletAddress',
    name: 'name',
    bio: 'bio',
    image: 'image',
    discord: 'discord',
    twitter: 'twitter',
    opensea: 'opensea',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PitchScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    investmentId: 'investmentId',
    title: 'title',
    description: 'description',
    deadline: 'deadline',
    initialInvestment: 'initialInvestment',
    profitAmountEstimation: 'profitAmountEstimation',
    isNative: 'isNative',
    investmentTokenAddress: 'investmentTokenAddress',
    profitPercentageAmount: 'profitPercentageAmount',
    chainId: 'chainId',
    isExecuted: 'isExecuted',
    voteFor: 'voteFor',
    voteAgainst: 'voteAgainst',
    totalVoters: 'totalVoters',
    Status: 'Status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PitchScalarFieldEnum = (typeof PitchScalarFieldEnum)[keyof typeof PitchScalarFieldEnum]


  export const StakeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    investmentId: 'investmentId',
    stake: 'stake',
    chainId: 'chainId',
    createdAt: 'createdAt'
  };

  export type StakeScalarFieldEnum = (typeof StakeScalarFieldEnum)[keyof typeof StakeScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accounts: 'accounts',
    title: 'title',
    description: 'description',
    image: 'image',
    tokenAddress: 'tokenAddress',
    tokenSymbol: 'tokenSymbol',
    tokenName: 'tokenName',
    chainId: 'chainId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const CurrentLiquidityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenAddress: 'tokenAddress',
    isNative: 'isNative',
    amount: 'amount'
  };

  export type CurrentLiquidityScalarFieldEnum = (typeof CurrentLiquidityScalarFieldEnum)[keyof typeof CurrentLiquidityScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    description: 'description',
    image: 'image',
    totalWinners: 'totalWinners',
    totalPrize: 'totalPrize',
    campaignStartDate: 'campaignStartDate',
    campaginEndDate: 'campaginEndDate',
    rewardType: 'rewardType',
    isNative: 'isNative',
    chainId: 'chainId',
    tokenAddress: 'tokenAddress',
    tokenSymbol: 'tokenSymbol',
    tokenName: 'tokenName',
    campaignPostImage: 'campaignPostImage',
    campaignPostLink: 'campaignPostLink',
    campaignPostVideo: 'campaignPostVideo',
    taskType: 'taskType',
    particpationType: 'particpationType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'RewardsType'
   */
  export type EnumRewardsTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardsType'>
    


  /**
   * Reference to a field of type 'RewardsType[]'
   */
  export type ListEnumRewardsTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardsType[]'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'ParticpationType'
   */
  export type EnumParticpationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticpationType'>
    


  /**
   * Reference to a field of type 'ParticpationType[]'
   */
  export type ListEnumParticpationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticpationType[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    walletAddress?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    discord?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    opensea?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    investments?: InvestmentListRelationFilter
    pitches?: PitchListRelationFilter
    stakes?: StakeListRelationFilter
    liquiditys?: CurrentLiquidityListRelationFilter
    campaigns?: CampaignListRelationFilter
    winnedCampaigns?: CampaignListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    walletAddress?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    discord?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    opensea?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    investments?: InvestmentOrderByRelationAggregateInput
    pitches?: PitchOrderByRelationAggregateInput
    stakes?: StakeOrderByRelationAggregateInput
    liquiditys?: CurrentLiquidityOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    winnedCampaigns?: CampaignOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    walletAddress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    discord?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    opensea?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    investments?: InvestmentListRelationFilter
    pitches?: PitchListRelationFilter
    stakes?: StakeListRelationFilter
    liquiditys?: CurrentLiquidityListRelationFilter
    campaigns?: CampaignListRelationFilter
    winnedCampaigns?: CampaignListRelationFilter
  }, "walletAddress">

  export type UserOrderByWithAggregationInput = {
    walletAddress?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    discord?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    opensea?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    walletAddress?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    discord?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"User"> | string | null
    opensea?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PitchWhereInput = {
    AND?: PitchWhereInput | PitchWhereInput[]
    OR?: PitchWhereInput[]
    NOT?: PitchWhereInput | PitchWhereInput[]
    id?: StringFilter<"Pitch"> | string
    userId?: StringFilter<"Pitch"> | string
    investmentId?: StringFilter<"Pitch"> | string
    title?: StringFilter<"Pitch"> | string
    description?: StringFilter<"Pitch"> | string
    deadline?: DateTimeFilter<"Pitch"> | Date | string
    initialInvestment?: IntFilter<"Pitch"> | number
    profitAmountEstimation?: IntFilter<"Pitch"> | number
    isNative?: BoolFilter<"Pitch"> | boolean
    investmentTokenAddress?: StringNullableFilter<"Pitch"> | string | null
    profitPercentageAmount?: IntFilter<"Pitch"> | number
    chainId?: IntFilter<"Pitch"> | number
    isExecuted?: BoolFilter<"Pitch"> | boolean
    voteFor?: IntFilter<"Pitch"> | number
    voteAgainst?: IntFilter<"Pitch"> | number
    totalVoters?: IntFilter<"Pitch"> | number
    Status?: EnumStatusFilter<"Pitch"> | $Enums.Status
    createdAt?: DateTimeFilter<"Pitch"> | Date | string
    updatedAt?: DateTimeFilter<"Pitch"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    investment?: XOR<InvestmentRelationFilter, InvestmentWhereInput>
  }

  export type PitchOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    initialInvestment?: SortOrder
    profitAmountEstimation?: SortOrder
    isNative?: SortOrder
    investmentTokenAddress?: SortOrderInput | SortOrder
    profitPercentageAmount?: SortOrder
    chainId?: SortOrder
    isExecuted?: SortOrder
    voteFor?: SortOrder
    voteAgainst?: SortOrder
    totalVoters?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    investment?: InvestmentOrderByWithRelationInput
  }

  export type PitchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PitchWhereInput | PitchWhereInput[]
    OR?: PitchWhereInput[]
    NOT?: PitchWhereInput | PitchWhereInput[]
    userId?: StringFilter<"Pitch"> | string
    investmentId?: StringFilter<"Pitch"> | string
    title?: StringFilter<"Pitch"> | string
    description?: StringFilter<"Pitch"> | string
    deadline?: DateTimeFilter<"Pitch"> | Date | string
    initialInvestment?: IntFilter<"Pitch"> | number
    profitAmountEstimation?: IntFilter<"Pitch"> | number
    isNative?: BoolFilter<"Pitch"> | boolean
    investmentTokenAddress?: StringNullableFilter<"Pitch"> | string | null
    profitPercentageAmount?: IntFilter<"Pitch"> | number
    chainId?: IntFilter<"Pitch"> | number
    isExecuted?: BoolFilter<"Pitch"> | boolean
    voteFor?: IntFilter<"Pitch"> | number
    voteAgainst?: IntFilter<"Pitch"> | number
    totalVoters?: IntFilter<"Pitch"> | number
    Status?: EnumStatusFilter<"Pitch"> | $Enums.Status
    createdAt?: DateTimeFilter<"Pitch"> | Date | string
    updatedAt?: DateTimeFilter<"Pitch"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    investment?: XOR<InvestmentRelationFilter, InvestmentWhereInput>
  }, "id">

  export type PitchOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    initialInvestment?: SortOrder
    profitAmountEstimation?: SortOrder
    isNative?: SortOrder
    investmentTokenAddress?: SortOrderInput | SortOrder
    profitPercentageAmount?: SortOrder
    chainId?: SortOrder
    isExecuted?: SortOrder
    voteFor?: SortOrder
    voteAgainst?: SortOrder
    totalVoters?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PitchCountOrderByAggregateInput
    _avg?: PitchAvgOrderByAggregateInput
    _max?: PitchMaxOrderByAggregateInput
    _min?: PitchMinOrderByAggregateInput
    _sum?: PitchSumOrderByAggregateInput
  }

  export type PitchScalarWhereWithAggregatesInput = {
    AND?: PitchScalarWhereWithAggregatesInput | PitchScalarWhereWithAggregatesInput[]
    OR?: PitchScalarWhereWithAggregatesInput[]
    NOT?: PitchScalarWhereWithAggregatesInput | PitchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pitch"> | string
    userId?: StringWithAggregatesFilter<"Pitch"> | string
    investmentId?: StringWithAggregatesFilter<"Pitch"> | string
    title?: StringWithAggregatesFilter<"Pitch"> | string
    description?: StringWithAggregatesFilter<"Pitch"> | string
    deadline?: DateTimeWithAggregatesFilter<"Pitch"> | Date | string
    initialInvestment?: IntWithAggregatesFilter<"Pitch"> | number
    profitAmountEstimation?: IntWithAggregatesFilter<"Pitch"> | number
    isNative?: BoolWithAggregatesFilter<"Pitch"> | boolean
    investmentTokenAddress?: StringNullableWithAggregatesFilter<"Pitch"> | string | null
    profitPercentageAmount?: IntWithAggregatesFilter<"Pitch"> | number
    chainId?: IntWithAggregatesFilter<"Pitch"> | number
    isExecuted?: BoolWithAggregatesFilter<"Pitch"> | boolean
    voteFor?: IntWithAggregatesFilter<"Pitch"> | number
    voteAgainst?: IntWithAggregatesFilter<"Pitch"> | number
    totalVoters?: IntWithAggregatesFilter<"Pitch"> | number
    Status?: EnumStatusWithAggregatesFilter<"Pitch"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Pitch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pitch"> | Date | string
  }

  export type StakeWhereInput = {
    AND?: StakeWhereInput | StakeWhereInput[]
    OR?: StakeWhereInput[]
    NOT?: StakeWhereInput | StakeWhereInput[]
    id?: StringFilter<"Stake"> | string
    userId?: StringFilter<"Stake"> | string
    investmentId?: StringFilter<"Stake"> | string
    stake?: IntFilter<"Stake"> | number
    chainId?: IntFilter<"Stake"> | number
    createdAt?: DateTimeFilter<"Stake"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    investment?: XOR<InvestmentRelationFilter, InvestmentWhereInput>
  }

  export type StakeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    stake?: SortOrder
    chainId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    investment?: InvestmentOrderByWithRelationInput
  }

  export type StakeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StakeWhereInput | StakeWhereInput[]
    OR?: StakeWhereInput[]
    NOT?: StakeWhereInput | StakeWhereInput[]
    userId?: StringFilter<"Stake"> | string
    investmentId?: StringFilter<"Stake"> | string
    stake?: IntFilter<"Stake"> | number
    chainId?: IntFilter<"Stake"> | number
    createdAt?: DateTimeFilter<"Stake"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    investment?: XOR<InvestmentRelationFilter, InvestmentWhereInput>
  }, "id">

  export type StakeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    stake?: SortOrder
    chainId?: SortOrder
    createdAt?: SortOrder
    _count?: StakeCountOrderByAggregateInput
    _avg?: StakeAvgOrderByAggregateInput
    _max?: StakeMaxOrderByAggregateInput
    _min?: StakeMinOrderByAggregateInput
    _sum?: StakeSumOrderByAggregateInput
  }

  export type StakeScalarWhereWithAggregatesInput = {
    AND?: StakeScalarWhereWithAggregatesInput | StakeScalarWhereWithAggregatesInput[]
    OR?: StakeScalarWhereWithAggregatesInput[]
    NOT?: StakeScalarWhereWithAggregatesInput | StakeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stake"> | string
    userId?: StringWithAggregatesFilter<"Stake"> | string
    investmentId?: StringWithAggregatesFilter<"Stake"> | string
    stake?: IntWithAggregatesFilter<"Stake"> | number
    chainId?: IntWithAggregatesFilter<"Stake"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Stake"> | Date | string
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: StringFilter<"Investment"> | string
    userId?: StringFilter<"Investment"> | string
    accounts?: StringNullableListFilter<"Investment">
    title?: StringFilter<"Investment"> | string
    description?: StringFilter<"Investment"> | string
    image?: StringFilter<"Investment"> | string
    tokenAddress?: StringFilter<"Investment"> | string
    tokenSymbol?: StringFilter<"Investment"> | string
    tokenName?: StringFilter<"Investment"> | string
    chainId?: IntNullableListFilter<"Investment">
    status?: EnumStatusFilter<"Investment"> | $Enums.Status
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    partners?: StakeListRelationFilter
    pitches?: PitchListRelationFilter
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accounts?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    chainId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    partners?: StakeOrderByRelationAggregateInput
    pitches?: PitchOrderByRelationAggregateInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    userId?: StringFilter<"Investment"> | string
    accounts?: StringNullableListFilter<"Investment">
    title?: StringFilter<"Investment"> | string
    description?: StringFilter<"Investment"> | string
    image?: StringFilter<"Investment"> | string
    tokenAddress?: StringFilter<"Investment"> | string
    tokenSymbol?: StringFilter<"Investment"> | string
    tokenName?: StringFilter<"Investment"> | string
    chainId?: IntNullableListFilter<"Investment">
    status?: EnumStatusFilter<"Investment"> | $Enums.Status
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    partners?: StakeListRelationFilter
    pitches?: PitchListRelationFilter
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accounts?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    chainId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment"> | string
    userId?: StringWithAggregatesFilter<"Investment"> | string
    accounts?: StringNullableListFilter<"Investment">
    title?: StringWithAggregatesFilter<"Investment"> | string
    description?: StringWithAggregatesFilter<"Investment"> | string
    image?: StringWithAggregatesFilter<"Investment"> | string
    tokenAddress?: StringWithAggregatesFilter<"Investment"> | string
    tokenSymbol?: StringWithAggregatesFilter<"Investment"> | string
    tokenName?: StringWithAggregatesFilter<"Investment"> | string
    chainId?: IntNullableListFilter<"Investment">
    status?: EnumStatusWithAggregatesFilter<"Investment"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
  }

  export type CurrentLiquidityWhereInput = {
    AND?: CurrentLiquidityWhereInput | CurrentLiquidityWhereInput[]
    OR?: CurrentLiquidityWhereInput[]
    NOT?: CurrentLiquidityWhereInput | CurrentLiquidityWhereInput[]
    id?: StringFilter<"CurrentLiquidity"> | string
    userId?: StringFilter<"CurrentLiquidity"> | string
    tokenAddress?: StringNullableFilter<"CurrentLiquidity"> | string | null
    isNative?: BoolFilter<"CurrentLiquidity"> | boolean
    amount?: IntFilter<"CurrentLiquidity"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CurrentLiquidityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    isNative?: SortOrder
    amount?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CurrentLiquidityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CurrentLiquidityWhereInput | CurrentLiquidityWhereInput[]
    OR?: CurrentLiquidityWhereInput[]
    NOT?: CurrentLiquidityWhereInput | CurrentLiquidityWhereInput[]
    userId?: StringFilter<"CurrentLiquidity"> | string
    tokenAddress?: StringNullableFilter<"CurrentLiquidity"> | string | null
    isNative?: BoolFilter<"CurrentLiquidity"> | boolean
    amount?: IntFilter<"CurrentLiquidity"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CurrentLiquidityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    isNative?: SortOrder
    amount?: SortOrder
    _count?: CurrentLiquidityCountOrderByAggregateInput
    _avg?: CurrentLiquidityAvgOrderByAggregateInput
    _max?: CurrentLiquidityMaxOrderByAggregateInput
    _min?: CurrentLiquidityMinOrderByAggregateInput
    _sum?: CurrentLiquiditySumOrderByAggregateInput
  }

  export type CurrentLiquidityScalarWhereWithAggregatesInput = {
    AND?: CurrentLiquidityScalarWhereWithAggregatesInput | CurrentLiquidityScalarWhereWithAggregatesInput[]
    OR?: CurrentLiquidityScalarWhereWithAggregatesInput[]
    NOT?: CurrentLiquidityScalarWhereWithAggregatesInput | CurrentLiquidityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CurrentLiquidity"> | string
    userId?: StringWithAggregatesFilter<"CurrentLiquidity"> | string
    tokenAddress?: StringNullableWithAggregatesFilter<"CurrentLiquidity"> | string | null
    isNative?: BoolWithAggregatesFilter<"CurrentLiquidity"> | boolean
    amount?: IntWithAggregatesFilter<"CurrentLiquidity"> | number
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    ownerId?: StringFilter<"Campaign"> | string
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    image?: StringFilter<"Campaign"> | string
    totalWinners?: IntFilter<"Campaign"> | number
    totalPrize?: IntFilter<"Campaign"> | number
    campaignStartDate?: DateTimeFilter<"Campaign"> | Date | string
    campaginEndDate?: DateTimeFilter<"Campaign"> | Date | string
    rewardType?: EnumRewardsTypeFilter<"Campaign"> | $Enums.RewardsType
    isNative?: BoolFilter<"Campaign"> | boolean
    chainId?: IntFilter<"Campaign"> | number
    tokenAddress?: StringNullableFilter<"Campaign"> | string | null
    tokenSymbol?: StringNullableFilter<"Campaign"> | string | null
    tokenName?: StringNullableFilter<"Campaign"> | string | null
    campaignPostImage?: StringNullableFilter<"Campaign"> | string | null
    campaignPostLink?: StringNullableFilter<"Campaign"> | string | null
    campaignPostVideo?: StringNullableFilter<"Campaign"> | string | null
    taskType?: EnumTaskTypeFilter<"Campaign"> | $Enums.TaskType
    particpationType?: EnumParticpationTypeFilter<"Campaign"> | $Enums.ParticpationType
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    campaignWinners?: UserListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    totalWinners?: SortOrder
    totalPrize?: SortOrder
    campaignStartDate?: SortOrder
    campaginEndDate?: SortOrder
    rewardType?: SortOrder
    isNative?: SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    tokenSymbol?: SortOrderInput | SortOrder
    tokenName?: SortOrderInput | SortOrder
    campaignPostImage?: SortOrderInput | SortOrder
    campaignPostLink?: SortOrderInput | SortOrder
    campaignPostVideo?: SortOrderInput | SortOrder
    taskType?: SortOrder
    particpationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    campaignWinners?: UserOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    ownerId?: StringFilter<"Campaign"> | string
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    image?: StringFilter<"Campaign"> | string
    totalWinners?: IntFilter<"Campaign"> | number
    totalPrize?: IntFilter<"Campaign"> | number
    campaignStartDate?: DateTimeFilter<"Campaign"> | Date | string
    campaginEndDate?: DateTimeFilter<"Campaign"> | Date | string
    rewardType?: EnumRewardsTypeFilter<"Campaign"> | $Enums.RewardsType
    isNative?: BoolFilter<"Campaign"> | boolean
    chainId?: IntFilter<"Campaign"> | number
    tokenAddress?: StringNullableFilter<"Campaign"> | string | null
    tokenSymbol?: StringNullableFilter<"Campaign"> | string | null
    tokenName?: StringNullableFilter<"Campaign"> | string | null
    campaignPostImage?: StringNullableFilter<"Campaign"> | string | null
    campaignPostLink?: StringNullableFilter<"Campaign"> | string | null
    campaignPostVideo?: StringNullableFilter<"Campaign"> | string | null
    taskType?: EnumTaskTypeFilter<"Campaign"> | $Enums.TaskType
    particpationType?: EnumParticpationTypeFilter<"Campaign"> | $Enums.ParticpationType
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    campaignWinners?: UserListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    totalWinners?: SortOrder
    totalPrize?: SortOrder
    campaignStartDate?: SortOrder
    campaginEndDate?: SortOrder
    rewardType?: SortOrder
    isNative?: SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    tokenSymbol?: SortOrderInput | SortOrder
    tokenName?: SortOrderInput | SortOrder
    campaignPostImage?: SortOrderInput | SortOrder
    campaignPostLink?: SortOrderInput | SortOrder
    campaignPostVideo?: SortOrderInput | SortOrder
    taskType?: SortOrder
    particpationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    ownerId?: StringWithAggregatesFilter<"Campaign"> | string
    title?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringWithAggregatesFilter<"Campaign"> | string
    image?: StringWithAggregatesFilter<"Campaign"> | string
    totalWinners?: IntWithAggregatesFilter<"Campaign"> | number
    totalPrize?: IntWithAggregatesFilter<"Campaign"> | number
    campaignStartDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    campaginEndDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    rewardType?: EnumRewardsTypeWithAggregatesFilter<"Campaign"> | $Enums.RewardsType
    isNative?: BoolWithAggregatesFilter<"Campaign"> | boolean
    chainId?: IntWithAggregatesFilter<"Campaign"> | number
    tokenAddress?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    tokenSymbol?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    tokenName?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    campaignPostImage?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    campaignPostLink?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    campaignPostVideo?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    taskType?: EnumTaskTypeWithAggregatesFilter<"Campaign"> | $Enums.TaskType
    particpationType?: EnumParticpationTypeWithAggregatesFilter<"Campaign"> | $Enums.ParticpationType
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type UserCreateInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    pitches?: PitchCreateNestedManyWithoutUserInput
    stakes?: StakeCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserUncheckedCreateInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    pitches?: PitchUncheckedCreateNestedManyWithoutUserInput
    stakes?: StakeUncheckedCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignUncheckedCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserUpdateInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    pitches?: PitchUpdateManyWithoutUserNestedInput
    stakes?: StakeUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    pitches?: PitchUncheckedUpdateManyWithoutUserNestedInput
    stakes?: StakeUncheckedUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUncheckedUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type UserCreateManyInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchCreateInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress?: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor?: number
    voteAgainst?: number
    totalVoters?: number
    Status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPitchesInput
    investment: InvestmentCreateNestedOneWithoutPitchesInput
  }

  export type PitchUncheckedCreateInput = {
    id?: string
    userId: string
    investmentId: string
    title: string
    description: string
    deadline: Date | string
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress?: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor?: number
    voteAgainst?: number
    totalVoters?: number
    Status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PitchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPitchesNestedInput
    investment?: InvestmentUpdateOneRequiredWithoutPitchesNestedInput
  }

  export type PitchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchCreateManyInput = {
    id?: string
    userId: string
    investmentId: string
    title: string
    description: string
    deadline: Date | string
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress?: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor?: number
    voteAgainst?: number
    totalVoters?: number
    Status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PitchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StakeCreateInput = {
    id?: string
    stake: number
    chainId: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStakesInput
    investment: InvestmentCreateNestedOneWithoutPartnersInput
  }

  export type StakeUncheckedCreateInput = {
    id?: string
    userId: string
    investmentId: string
    stake: number
    chainId: number
    createdAt?: Date | string
  }

  export type StakeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStakesNestedInput
    investment?: InvestmentUpdateOneRequiredWithoutPartnersNestedInput
  }

  export type StakeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StakeCreateManyInput = {
    id?: string
    userId: string
    investmentId: string
    stake: number
    chainId: number
    createdAt?: Date | string
  }

  export type StakeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StakeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateInput = {
    id?: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvestmentsInput
    partners?: StakeCreateNestedManyWithoutInvestmentInput
    pitches?: PitchCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: string
    userId: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: StakeUncheckedCreateNestedManyWithoutInvestmentInput
    pitches?: PitchUncheckedCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
    partners?: StakeUpdateManyWithoutInvestmentNestedInput
    pitches?: PitchUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: StakeUncheckedUpdateManyWithoutInvestmentNestedInput
    pitches?: PitchUncheckedUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentCreateManyInput = {
    id?: string
    userId: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrentLiquidityCreateInput = {
    id?: string
    tokenAddress?: string | null
    isNative: boolean
    amount: number
    user: UserCreateNestedOneWithoutLiquiditysInput
  }

  export type CurrentLiquidityUncheckedCreateInput = {
    id?: string
    userId: string
    tokenAddress?: string | null
    isNative: boolean
    amount: number
  }

  export type CurrentLiquidityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isNative?: BoolFieldUpdateOperationsInput | boolean
    amount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLiquiditysNestedInput
  }

  export type CurrentLiquidityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isNative?: BoolFieldUpdateOperationsInput | boolean
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type CurrentLiquidityCreateManyInput = {
    id?: string
    userId: string
    tokenAddress?: string | null
    isNative: boolean
    amount: number
  }

  export type CurrentLiquidityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isNative?: BoolFieldUpdateOperationsInput | boolean
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type CurrentLiquidityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isNative?: BoolFieldUpdateOperationsInput | boolean
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type CampaignCreateInput = {
    id?: string
    title: string
    description: string
    image: string
    totalWinners: number
    totalPrize: number
    campaignStartDate: Date | string
    campaginEndDate: Date | string
    rewardType: $Enums.RewardsType
    isNative: boolean
    chainId: number
    tokenAddress?: string | null
    tokenSymbol?: string | null
    tokenName?: string | null
    campaignPostImage?: string | null
    campaignPostLink?: string | null
    campaignPostVideo?: string | null
    taskType: $Enums.TaskType
    particpationType: $Enums.ParticpationType
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCampaignsInput
    campaignWinners?: UserCreateNestedManyWithoutWinnedCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    description: string
    image: string
    totalWinners: number
    totalPrize: number
    campaignStartDate: Date | string
    campaginEndDate: Date | string
    rewardType: $Enums.RewardsType
    isNative: boolean
    chainId: number
    tokenAddress?: string | null
    tokenSymbol?: string | null
    tokenName?: string | null
    campaignPostImage?: string | null
    campaignPostLink?: string | null
    campaignPostVideo?: string | null
    taskType: $Enums.TaskType
    particpationType: $Enums.ParticpationType
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignWinners?: UserUncheckedCreateNestedManyWithoutWinnedCampaignsInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    campaignWinners?: UserUpdateManyWithoutWinnedCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignWinners?: UserUncheckedUpdateManyWithoutWinnedCampaignsNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    description: string
    image: string
    totalWinners: number
    totalPrize: number
    campaignStartDate: Date | string
    campaginEndDate: Date | string
    rewardType: $Enums.RewardsType
    isNative: boolean
    chainId: number
    tokenAddress?: string | null
    tokenSymbol?: string | null
    tokenName?: string | null
    campaignPostImage?: string | null
    campaignPostLink?: string | null
    campaignPostVideo?: string | null
    taskType: $Enums.TaskType
    particpationType: $Enums.ParticpationType
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type PitchListRelationFilter = {
    every?: PitchWhereInput
    some?: PitchWhereInput
    none?: PitchWhereInput
  }

  export type StakeListRelationFilter = {
    every?: StakeWhereInput
    some?: StakeWhereInput
    none?: StakeWhereInput
  }

  export type CurrentLiquidityListRelationFilter = {
    every?: CurrentLiquidityWhereInput
    some?: CurrentLiquidityWhereInput
    none?: CurrentLiquidityWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PitchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StakeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrentLiquidityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    walletAddress?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    discord?: SortOrder
    twitter?: SortOrder
    opensea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    walletAddress?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    discord?: SortOrder
    twitter?: SortOrder
    opensea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    walletAddress?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    discord?: SortOrder
    twitter?: SortOrder
    opensea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InvestmentRelationFilter = {
    is?: InvestmentWhereInput
    isNot?: InvestmentWhereInput
  }

  export type PitchCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    initialInvestment?: SortOrder
    profitAmountEstimation?: SortOrder
    isNative?: SortOrder
    investmentTokenAddress?: SortOrder
    profitPercentageAmount?: SortOrder
    chainId?: SortOrder
    isExecuted?: SortOrder
    voteFor?: SortOrder
    voteAgainst?: SortOrder
    totalVoters?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PitchAvgOrderByAggregateInput = {
    initialInvestment?: SortOrder
    profitAmountEstimation?: SortOrder
    profitPercentageAmount?: SortOrder
    chainId?: SortOrder
    voteFor?: SortOrder
    voteAgainst?: SortOrder
    totalVoters?: SortOrder
  }

  export type PitchMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    initialInvestment?: SortOrder
    profitAmountEstimation?: SortOrder
    isNative?: SortOrder
    investmentTokenAddress?: SortOrder
    profitPercentageAmount?: SortOrder
    chainId?: SortOrder
    isExecuted?: SortOrder
    voteFor?: SortOrder
    voteAgainst?: SortOrder
    totalVoters?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PitchMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    initialInvestment?: SortOrder
    profitAmountEstimation?: SortOrder
    isNative?: SortOrder
    investmentTokenAddress?: SortOrder
    profitPercentageAmount?: SortOrder
    chainId?: SortOrder
    isExecuted?: SortOrder
    voteFor?: SortOrder
    voteAgainst?: SortOrder
    totalVoters?: SortOrder
    Status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PitchSumOrderByAggregateInput = {
    initialInvestment?: SortOrder
    profitAmountEstimation?: SortOrder
    profitPercentageAmount?: SortOrder
    chainId?: SortOrder
    voteFor?: SortOrder
    voteAgainst?: SortOrder
    totalVoters?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StakeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    stake?: SortOrder
    chainId?: SortOrder
    createdAt?: SortOrder
  }

  export type StakeAvgOrderByAggregateInput = {
    stake?: SortOrder
    chainId?: SortOrder
  }

  export type StakeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    stake?: SortOrder
    chainId?: SortOrder
    createdAt?: SortOrder
  }

  export type StakeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    investmentId?: SortOrder
    stake?: SortOrder
    chainId?: SortOrder
    createdAt?: SortOrder
  }

  export type StakeSumOrderByAggregateInput = {
    stake?: SortOrder
    chainId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accounts?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    chainId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    chainId?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    chainId?: SortOrder
  }

  export type CurrentLiquidityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrder
    isNative?: SortOrder
    amount?: SortOrder
  }

  export type CurrentLiquidityAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CurrentLiquidityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrder
    isNative?: SortOrder
    amount?: SortOrder
  }

  export type CurrentLiquidityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenAddress?: SortOrder
    isNative?: SortOrder
    amount?: SortOrder
  }

  export type CurrentLiquiditySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumRewardsTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardsType | EnumRewardsTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RewardsType[] | ListEnumRewardsTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardsType[] | ListEnumRewardsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardsTypeFilter<$PrismaModel> | $Enums.RewardsType
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type EnumParticpationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticpationType | EnumParticpationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticpationType[] | ListEnumParticpationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticpationType[] | ListEnumParticpationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticpationTypeFilter<$PrismaModel> | $Enums.ParticpationType
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    totalWinners?: SortOrder
    totalPrize?: SortOrder
    campaignStartDate?: SortOrder
    campaginEndDate?: SortOrder
    rewardType?: SortOrder
    isNative?: SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    campaignPostImage?: SortOrder
    campaignPostLink?: SortOrder
    campaignPostVideo?: SortOrder
    taskType?: SortOrder
    particpationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    totalWinners?: SortOrder
    totalPrize?: SortOrder
    chainId?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    totalWinners?: SortOrder
    totalPrize?: SortOrder
    campaignStartDate?: SortOrder
    campaginEndDate?: SortOrder
    rewardType?: SortOrder
    isNative?: SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    campaignPostImage?: SortOrder
    campaignPostLink?: SortOrder
    campaignPostVideo?: SortOrder
    taskType?: SortOrder
    particpationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    totalWinners?: SortOrder
    totalPrize?: SortOrder
    campaignStartDate?: SortOrder
    campaginEndDate?: SortOrder
    rewardType?: SortOrder
    isNative?: SortOrder
    chainId?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    tokenName?: SortOrder
    campaignPostImage?: SortOrder
    campaignPostLink?: SortOrder
    campaignPostVideo?: SortOrder
    taskType?: SortOrder
    particpationType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    totalWinners?: SortOrder
    totalPrize?: SortOrder
    chainId?: SortOrder
  }

  export type EnumRewardsTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardsType | EnumRewardsTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RewardsType[] | ListEnumRewardsTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardsType[] | ListEnumRewardsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardsTypeWithAggregatesFilter<$PrismaModel> | $Enums.RewardsType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardsTypeFilter<$PrismaModel>
    _max?: NestedEnumRewardsTypeFilter<$PrismaModel>
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type EnumParticpationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticpationType | EnumParticpationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticpationType[] | ListEnumParticpationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticpationType[] | ListEnumParticpationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticpationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ParticpationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticpationTypeFilter<$PrismaModel>
    _max?: NestedEnumParticpationTypeFilter<$PrismaModel>
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type InvestmentCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type PitchCreateNestedManyWithoutUserInput = {
    create?: XOR<PitchCreateWithoutUserInput, PitchUncheckedCreateWithoutUserInput> | PitchCreateWithoutUserInput[] | PitchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutUserInput | PitchCreateOrConnectWithoutUserInput[]
    createMany?: PitchCreateManyUserInputEnvelope
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
  }

  export type StakeCreateNestedManyWithoutUserInput = {
    create?: XOR<StakeCreateWithoutUserInput, StakeUncheckedCreateWithoutUserInput> | StakeCreateWithoutUserInput[] | StakeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StakeCreateOrConnectWithoutUserInput | StakeCreateOrConnectWithoutUserInput[]
    createMany?: StakeCreateManyUserInputEnvelope
    connect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
  }

  export type CurrentLiquidityCreateNestedManyWithoutUserInput = {
    create?: XOR<CurrentLiquidityCreateWithoutUserInput, CurrentLiquidityUncheckedCreateWithoutUserInput> | CurrentLiquidityCreateWithoutUserInput[] | CurrentLiquidityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurrentLiquidityCreateOrConnectWithoutUserInput | CurrentLiquidityCreateOrConnectWithoutUserInput[]
    createMany?: CurrentLiquidityCreateManyUserInputEnvelope
    connect?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CampaignCreateWithoutOwnerInput, CampaignUncheckedCreateWithoutOwnerInput> | CampaignCreateWithoutOwnerInput[] | CampaignUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutOwnerInput | CampaignCreateOrConnectWithoutOwnerInput[]
    createMany?: CampaignCreateManyOwnerInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutCampaignWinnersInput = {
    create?: XOR<CampaignCreateWithoutCampaignWinnersInput, CampaignUncheckedCreateWithoutCampaignWinnersInput> | CampaignCreateWithoutCampaignWinnersInput[] | CampaignUncheckedCreateWithoutCampaignWinnersInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignWinnersInput | CampaignCreateOrConnectWithoutCampaignWinnersInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type PitchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PitchCreateWithoutUserInput, PitchUncheckedCreateWithoutUserInput> | PitchCreateWithoutUserInput[] | PitchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutUserInput | PitchCreateOrConnectWithoutUserInput[]
    createMany?: PitchCreateManyUserInputEnvelope
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
  }

  export type StakeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StakeCreateWithoutUserInput, StakeUncheckedCreateWithoutUserInput> | StakeCreateWithoutUserInput[] | StakeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StakeCreateOrConnectWithoutUserInput | StakeCreateOrConnectWithoutUserInput[]
    createMany?: StakeCreateManyUserInputEnvelope
    connect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
  }

  export type CurrentLiquidityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CurrentLiquidityCreateWithoutUserInput, CurrentLiquidityUncheckedCreateWithoutUserInput> | CurrentLiquidityCreateWithoutUserInput[] | CurrentLiquidityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurrentLiquidityCreateOrConnectWithoutUserInput | CurrentLiquidityCreateOrConnectWithoutUserInput[]
    createMany?: CurrentLiquidityCreateManyUserInputEnvelope
    connect?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CampaignCreateWithoutOwnerInput, CampaignUncheckedCreateWithoutOwnerInput> | CampaignCreateWithoutOwnerInput[] | CampaignUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutOwnerInput | CampaignCreateOrConnectWithoutOwnerInput[]
    createMany?: CampaignCreateManyOwnerInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutCampaignWinnersInput = {
    create?: XOR<CampaignCreateWithoutCampaignWinnersInput, CampaignUncheckedCreateWithoutCampaignWinnersInput> | CampaignCreateWithoutCampaignWinnersInput[] | CampaignUncheckedCreateWithoutCampaignWinnersInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignWinnersInput | CampaignCreateOrConnectWithoutCampaignWinnersInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InvestmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type PitchUpdateManyWithoutUserNestedInput = {
    create?: XOR<PitchCreateWithoutUserInput, PitchUncheckedCreateWithoutUserInput> | PitchCreateWithoutUserInput[] | PitchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutUserInput | PitchCreateOrConnectWithoutUserInput[]
    upsert?: PitchUpsertWithWhereUniqueWithoutUserInput | PitchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PitchCreateManyUserInputEnvelope
    set?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    disconnect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    delete?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    update?: PitchUpdateWithWhereUniqueWithoutUserInput | PitchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PitchUpdateManyWithWhereWithoutUserInput | PitchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PitchScalarWhereInput | PitchScalarWhereInput[]
  }

  export type StakeUpdateManyWithoutUserNestedInput = {
    create?: XOR<StakeCreateWithoutUserInput, StakeUncheckedCreateWithoutUserInput> | StakeCreateWithoutUserInput[] | StakeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StakeCreateOrConnectWithoutUserInput | StakeCreateOrConnectWithoutUserInput[]
    upsert?: StakeUpsertWithWhereUniqueWithoutUserInput | StakeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StakeCreateManyUserInputEnvelope
    set?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    disconnect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    delete?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    connect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    update?: StakeUpdateWithWhereUniqueWithoutUserInput | StakeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StakeUpdateManyWithWhereWithoutUserInput | StakeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StakeScalarWhereInput | StakeScalarWhereInput[]
  }

  export type CurrentLiquidityUpdateManyWithoutUserNestedInput = {
    create?: XOR<CurrentLiquidityCreateWithoutUserInput, CurrentLiquidityUncheckedCreateWithoutUserInput> | CurrentLiquidityCreateWithoutUserInput[] | CurrentLiquidityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurrentLiquidityCreateOrConnectWithoutUserInput | CurrentLiquidityCreateOrConnectWithoutUserInput[]
    upsert?: CurrentLiquidityUpsertWithWhereUniqueWithoutUserInput | CurrentLiquidityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CurrentLiquidityCreateManyUserInputEnvelope
    set?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
    disconnect?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
    delete?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
    connect?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
    update?: CurrentLiquidityUpdateWithWhereUniqueWithoutUserInput | CurrentLiquidityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CurrentLiquidityUpdateManyWithWhereWithoutUserInput | CurrentLiquidityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CurrentLiquidityScalarWhereInput | CurrentLiquidityScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CampaignCreateWithoutOwnerInput, CampaignUncheckedCreateWithoutOwnerInput> | CampaignCreateWithoutOwnerInput[] | CampaignUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutOwnerInput | CampaignCreateOrConnectWithoutOwnerInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutOwnerInput | CampaignUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CampaignCreateManyOwnerInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutOwnerInput | CampaignUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutOwnerInput | CampaignUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutCampaignWinnersNestedInput = {
    create?: XOR<CampaignCreateWithoutCampaignWinnersInput, CampaignUncheckedCreateWithoutCampaignWinnersInput> | CampaignCreateWithoutCampaignWinnersInput[] | CampaignUncheckedCreateWithoutCampaignWinnersInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignWinnersInput | CampaignCreateOrConnectWithoutCampaignWinnersInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCampaignWinnersInput | CampaignUpsertWithWhereUniqueWithoutCampaignWinnersInput[]
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCampaignWinnersInput | CampaignUpdateWithWhereUniqueWithoutCampaignWinnersInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCampaignWinnersInput | CampaignUpdateManyWithWhereWithoutCampaignWinnersInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type PitchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PitchCreateWithoutUserInput, PitchUncheckedCreateWithoutUserInput> | PitchCreateWithoutUserInput[] | PitchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutUserInput | PitchCreateOrConnectWithoutUserInput[]
    upsert?: PitchUpsertWithWhereUniqueWithoutUserInput | PitchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PitchCreateManyUserInputEnvelope
    set?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    disconnect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    delete?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    update?: PitchUpdateWithWhereUniqueWithoutUserInput | PitchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PitchUpdateManyWithWhereWithoutUserInput | PitchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PitchScalarWhereInput | PitchScalarWhereInput[]
  }

  export type StakeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StakeCreateWithoutUserInput, StakeUncheckedCreateWithoutUserInput> | StakeCreateWithoutUserInput[] | StakeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StakeCreateOrConnectWithoutUserInput | StakeCreateOrConnectWithoutUserInput[]
    upsert?: StakeUpsertWithWhereUniqueWithoutUserInput | StakeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StakeCreateManyUserInputEnvelope
    set?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    disconnect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    delete?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    connect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    update?: StakeUpdateWithWhereUniqueWithoutUserInput | StakeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StakeUpdateManyWithWhereWithoutUserInput | StakeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StakeScalarWhereInput | StakeScalarWhereInput[]
  }

  export type CurrentLiquidityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CurrentLiquidityCreateWithoutUserInput, CurrentLiquidityUncheckedCreateWithoutUserInput> | CurrentLiquidityCreateWithoutUserInput[] | CurrentLiquidityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CurrentLiquidityCreateOrConnectWithoutUserInput | CurrentLiquidityCreateOrConnectWithoutUserInput[]
    upsert?: CurrentLiquidityUpsertWithWhereUniqueWithoutUserInput | CurrentLiquidityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CurrentLiquidityCreateManyUserInputEnvelope
    set?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
    disconnect?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
    delete?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
    connect?: CurrentLiquidityWhereUniqueInput | CurrentLiquidityWhereUniqueInput[]
    update?: CurrentLiquidityUpdateWithWhereUniqueWithoutUserInput | CurrentLiquidityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CurrentLiquidityUpdateManyWithWhereWithoutUserInput | CurrentLiquidityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CurrentLiquidityScalarWhereInput | CurrentLiquidityScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CampaignCreateWithoutOwnerInput, CampaignUncheckedCreateWithoutOwnerInput> | CampaignCreateWithoutOwnerInput[] | CampaignUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutOwnerInput | CampaignCreateOrConnectWithoutOwnerInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutOwnerInput | CampaignUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CampaignCreateManyOwnerInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutOwnerInput | CampaignUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutOwnerInput | CampaignUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutCampaignWinnersNestedInput = {
    create?: XOR<CampaignCreateWithoutCampaignWinnersInput, CampaignUncheckedCreateWithoutCampaignWinnersInput> | CampaignCreateWithoutCampaignWinnersInput[] | CampaignUncheckedCreateWithoutCampaignWinnersInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignWinnersInput | CampaignCreateOrConnectWithoutCampaignWinnersInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCampaignWinnersInput | CampaignUpsertWithWhereUniqueWithoutCampaignWinnersInput[]
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCampaignWinnersInput | CampaignUpdateWithWhereUniqueWithoutCampaignWinnersInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCampaignWinnersInput | CampaignUpdateManyWithWhereWithoutCampaignWinnersInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPitchesInput = {
    create?: XOR<UserCreateWithoutPitchesInput, UserUncheckedCreateWithoutPitchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPitchesInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentCreateNestedOneWithoutPitchesInput = {
    create?: XOR<InvestmentCreateWithoutPitchesInput, InvestmentUncheckedCreateWithoutPitchesInput>
    connectOrCreate?: InvestmentCreateOrConnectWithoutPitchesInput
    connect?: InvestmentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutPitchesNestedInput = {
    create?: XOR<UserCreateWithoutPitchesInput, UserUncheckedCreateWithoutPitchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPitchesInput
    upsert?: UserUpsertWithoutPitchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPitchesInput, UserUpdateWithoutPitchesInput>, UserUncheckedUpdateWithoutPitchesInput>
  }

  export type InvestmentUpdateOneRequiredWithoutPitchesNestedInput = {
    create?: XOR<InvestmentCreateWithoutPitchesInput, InvestmentUncheckedCreateWithoutPitchesInput>
    connectOrCreate?: InvestmentCreateOrConnectWithoutPitchesInput
    upsert?: InvestmentUpsertWithoutPitchesInput
    connect?: InvestmentWhereUniqueInput
    update?: XOR<XOR<InvestmentUpdateToOneWithWhereWithoutPitchesInput, InvestmentUpdateWithoutPitchesInput>, InvestmentUncheckedUpdateWithoutPitchesInput>
  }

  export type UserCreateNestedOneWithoutStakesInput = {
    create?: XOR<UserCreateWithoutStakesInput, UserUncheckedCreateWithoutStakesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStakesInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentCreateNestedOneWithoutPartnersInput = {
    create?: XOR<InvestmentCreateWithoutPartnersInput, InvestmentUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: InvestmentCreateOrConnectWithoutPartnersInput
    connect?: InvestmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStakesNestedInput = {
    create?: XOR<UserCreateWithoutStakesInput, UserUncheckedCreateWithoutStakesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStakesInput
    upsert?: UserUpsertWithoutStakesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStakesInput, UserUpdateWithoutStakesInput>, UserUncheckedUpdateWithoutStakesInput>
  }

  export type InvestmentUpdateOneRequiredWithoutPartnersNestedInput = {
    create?: XOR<InvestmentCreateWithoutPartnersInput, InvestmentUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: InvestmentCreateOrConnectWithoutPartnersInput
    upsert?: InvestmentUpsertWithoutPartnersInput
    connect?: InvestmentWhereUniqueInput
    update?: XOR<XOR<InvestmentUpdateToOneWithWhereWithoutPartnersInput, InvestmentUpdateWithoutPartnersInput>, InvestmentUncheckedUpdateWithoutPartnersInput>
  }

  export type InvestmentCreateaccountsInput = {
    set: string[]
  }

  export type InvestmentCreatechainIdInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
  }

  export type StakeCreateNestedManyWithoutInvestmentInput = {
    create?: XOR<StakeCreateWithoutInvestmentInput, StakeUncheckedCreateWithoutInvestmentInput> | StakeCreateWithoutInvestmentInput[] | StakeUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: StakeCreateOrConnectWithoutInvestmentInput | StakeCreateOrConnectWithoutInvestmentInput[]
    createMany?: StakeCreateManyInvestmentInputEnvelope
    connect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
  }

  export type PitchCreateNestedManyWithoutInvestmentInput = {
    create?: XOR<PitchCreateWithoutInvestmentInput, PitchUncheckedCreateWithoutInvestmentInput> | PitchCreateWithoutInvestmentInput[] | PitchUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutInvestmentInput | PitchCreateOrConnectWithoutInvestmentInput[]
    createMany?: PitchCreateManyInvestmentInputEnvelope
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
  }

  export type StakeUncheckedCreateNestedManyWithoutInvestmentInput = {
    create?: XOR<StakeCreateWithoutInvestmentInput, StakeUncheckedCreateWithoutInvestmentInput> | StakeCreateWithoutInvestmentInput[] | StakeUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: StakeCreateOrConnectWithoutInvestmentInput | StakeCreateOrConnectWithoutInvestmentInput[]
    createMany?: StakeCreateManyInvestmentInputEnvelope
    connect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
  }

  export type PitchUncheckedCreateNestedManyWithoutInvestmentInput = {
    create?: XOR<PitchCreateWithoutInvestmentInput, PitchUncheckedCreateWithoutInvestmentInput> | PitchCreateWithoutInvestmentInput[] | PitchUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutInvestmentInput | PitchCreateOrConnectWithoutInvestmentInput[]
    createMany?: PitchCreateManyInvestmentInputEnvelope
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
  }

  export type InvestmentUpdateaccountsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InvestmentUpdatechainIdInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    upsert?: UserUpsertWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestmentsInput, UserUpdateWithoutInvestmentsInput>, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type StakeUpdateManyWithoutInvestmentNestedInput = {
    create?: XOR<StakeCreateWithoutInvestmentInput, StakeUncheckedCreateWithoutInvestmentInput> | StakeCreateWithoutInvestmentInput[] | StakeUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: StakeCreateOrConnectWithoutInvestmentInput | StakeCreateOrConnectWithoutInvestmentInput[]
    upsert?: StakeUpsertWithWhereUniqueWithoutInvestmentInput | StakeUpsertWithWhereUniqueWithoutInvestmentInput[]
    createMany?: StakeCreateManyInvestmentInputEnvelope
    set?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    disconnect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    delete?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    connect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    update?: StakeUpdateWithWhereUniqueWithoutInvestmentInput | StakeUpdateWithWhereUniqueWithoutInvestmentInput[]
    updateMany?: StakeUpdateManyWithWhereWithoutInvestmentInput | StakeUpdateManyWithWhereWithoutInvestmentInput[]
    deleteMany?: StakeScalarWhereInput | StakeScalarWhereInput[]
  }

  export type PitchUpdateManyWithoutInvestmentNestedInput = {
    create?: XOR<PitchCreateWithoutInvestmentInput, PitchUncheckedCreateWithoutInvestmentInput> | PitchCreateWithoutInvestmentInput[] | PitchUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutInvestmentInput | PitchCreateOrConnectWithoutInvestmentInput[]
    upsert?: PitchUpsertWithWhereUniqueWithoutInvestmentInput | PitchUpsertWithWhereUniqueWithoutInvestmentInput[]
    createMany?: PitchCreateManyInvestmentInputEnvelope
    set?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    disconnect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    delete?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    update?: PitchUpdateWithWhereUniqueWithoutInvestmentInput | PitchUpdateWithWhereUniqueWithoutInvestmentInput[]
    updateMany?: PitchUpdateManyWithWhereWithoutInvestmentInput | PitchUpdateManyWithWhereWithoutInvestmentInput[]
    deleteMany?: PitchScalarWhereInput | PitchScalarWhereInput[]
  }

  export type StakeUncheckedUpdateManyWithoutInvestmentNestedInput = {
    create?: XOR<StakeCreateWithoutInvestmentInput, StakeUncheckedCreateWithoutInvestmentInput> | StakeCreateWithoutInvestmentInput[] | StakeUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: StakeCreateOrConnectWithoutInvestmentInput | StakeCreateOrConnectWithoutInvestmentInput[]
    upsert?: StakeUpsertWithWhereUniqueWithoutInvestmentInput | StakeUpsertWithWhereUniqueWithoutInvestmentInput[]
    createMany?: StakeCreateManyInvestmentInputEnvelope
    set?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    disconnect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    delete?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    connect?: StakeWhereUniqueInput | StakeWhereUniqueInput[]
    update?: StakeUpdateWithWhereUniqueWithoutInvestmentInput | StakeUpdateWithWhereUniqueWithoutInvestmentInput[]
    updateMany?: StakeUpdateManyWithWhereWithoutInvestmentInput | StakeUpdateManyWithWhereWithoutInvestmentInput[]
    deleteMany?: StakeScalarWhereInput | StakeScalarWhereInput[]
  }

  export type PitchUncheckedUpdateManyWithoutInvestmentNestedInput = {
    create?: XOR<PitchCreateWithoutInvestmentInput, PitchUncheckedCreateWithoutInvestmentInput> | PitchCreateWithoutInvestmentInput[] | PitchUncheckedCreateWithoutInvestmentInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutInvestmentInput | PitchCreateOrConnectWithoutInvestmentInput[]
    upsert?: PitchUpsertWithWhereUniqueWithoutInvestmentInput | PitchUpsertWithWhereUniqueWithoutInvestmentInput[]
    createMany?: PitchCreateManyInvestmentInputEnvelope
    set?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    disconnect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    delete?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    update?: PitchUpdateWithWhereUniqueWithoutInvestmentInput | PitchUpdateWithWhereUniqueWithoutInvestmentInput[]
    updateMany?: PitchUpdateManyWithWhereWithoutInvestmentInput | PitchUpdateManyWithWhereWithoutInvestmentInput[]
    deleteMany?: PitchScalarWhereInput | PitchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLiquiditysInput = {
    create?: XOR<UserCreateWithoutLiquiditysInput, UserUncheckedCreateWithoutLiquiditysInput>
    connectOrCreate?: UserCreateOrConnectWithoutLiquiditysInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLiquiditysNestedInput = {
    create?: XOR<UserCreateWithoutLiquiditysInput, UserUncheckedCreateWithoutLiquiditysInput>
    connectOrCreate?: UserCreateOrConnectWithoutLiquiditysInput
    upsert?: UserUpsertWithoutLiquiditysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLiquiditysInput, UserUpdateWithoutLiquiditysInput>, UserUncheckedUpdateWithoutLiquiditysInput>
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutWinnedCampaignsInput = {
    create?: XOR<UserCreateWithoutWinnedCampaignsInput, UserUncheckedCreateWithoutWinnedCampaignsInput> | UserCreateWithoutWinnedCampaignsInput[] | UserUncheckedCreateWithoutWinnedCampaignsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWinnedCampaignsInput | UserCreateOrConnectWithoutWinnedCampaignsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutWinnedCampaignsInput = {
    create?: XOR<UserCreateWithoutWinnedCampaignsInput, UserUncheckedCreateWithoutWinnedCampaignsInput> | UserCreateWithoutWinnedCampaignsInput[] | UserUncheckedCreateWithoutWinnedCampaignsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWinnedCampaignsInput | UserCreateOrConnectWithoutWinnedCampaignsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRewardsTypeFieldUpdateOperationsInput = {
    set?: $Enums.RewardsType
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type EnumParticpationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ParticpationType
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateManyWithoutWinnedCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutWinnedCampaignsInput, UserUncheckedCreateWithoutWinnedCampaignsInput> | UserCreateWithoutWinnedCampaignsInput[] | UserUncheckedCreateWithoutWinnedCampaignsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWinnedCampaignsInput | UserCreateOrConnectWithoutWinnedCampaignsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWinnedCampaignsInput | UserUpsertWithWhereUniqueWithoutWinnedCampaignsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWinnedCampaignsInput | UserUpdateWithWhereUniqueWithoutWinnedCampaignsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWinnedCampaignsInput | UserUpdateManyWithWhereWithoutWinnedCampaignsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutWinnedCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutWinnedCampaignsInput, UserUncheckedCreateWithoutWinnedCampaignsInput> | UserCreateWithoutWinnedCampaignsInput[] | UserUncheckedCreateWithoutWinnedCampaignsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWinnedCampaignsInput | UserCreateOrConnectWithoutWinnedCampaignsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWinnedCampaignsInput | UserUpsertWithWhereUniqueWithoutWinnedCampaignsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWinnedCampaignsInput | UserUpdateWithWhereUniqueWithoutWinnedCampaignsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWinnedCampaignsInput | UserUpdateManyWithWhereWithoutWinnedCampaignsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumRewardsTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardsType | EnumRewardsTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RewardsType[] | ListEnumRewardsTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardsType[] | ListEnumRewardsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardsTypeFilter<$PrismaModel> | $Enums.RewardsType
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumParticpationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticpationType | EnumParticpationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticpationType[] | ListEnumParticpationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticpationType[] | ListEnumParticpationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticpationTypeFilter<$PrismaModel> | $Enums.ParticpationType
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumRewardsTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardsType | EnumRewardsTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RewardsType[] | ListEnumRewardsTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardsType[] | ListEnumRewardsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardsTypeWithAggregatesFilter<$PrismaModel> | $Enums.RewardsType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardsTypeFilter<$PrismaModel>
    _max?: NestedEnumRewardsTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedEnumParticpationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticpationType | EnumParticpationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticpationType[] | ListEnumParticpationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticpationType[] | ListEnumParticpationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticpationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ParticpationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticpationTypeFilter<$PrismaModel>
    _max?: NestedEnumParticpationTypeFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type InvestmentCreateWithoutUserInput = {
    id?: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: StakeCreateNestedManyWithoutInvestmentInput
    pitches?: PitchCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateWithoutUserInput = {
    id?: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: StakeUncheckedCreateNestedManyWithoutInvestmentInput
    pitches?: PitchUncheckedCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentCreateOrConnectWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentCreateManyUserInputEnvelope = {
    data: InvestmentCreateManyUserInput | InvestmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PitchCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress?: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor?: number
    voteAgainst?: number
    totalVoters?: number
    Status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    investment: InvestmentCreateNestedOneWithoutPitchesInput
  }

  export type PitchUncheckedCreateWithoutUserInput = {
    id?: string
    investmentId: string
    title: string
    description: string
    deadline: Date | string
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress?: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor?: number
    voteAgainst?: number
    totalVoters?: number
    Status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PitchCreateOrConnectWithoutUserInput = {
    where: PitchWhereUniqueInput
    create: XOR<PitchCreateWithoutUserInput, PitchUncheckedCreateWithoutUserInput>
  }

  export type PitchCreateManyUserInputEnvelope = {
    data: PitchCreateManyUserInput | PitchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StakeCreateWithoutUserInput = {
    id?: string
    stake: number
    chainId: number
    createdAt?: Date | string
    investment: InvestmentCreateNestedOneWithoutPartnersInput
  }

  export type StakeUncheckedCreateWithoutUserInput = {
    id?: string
    investmentId: string
    stake: number
    chainId: number
    createdAt?: Date | string
  }

  export type StakeCreateOrConnectWithoutUserInput = {
    where: StakeWhereUniqueInput
    create: XOR<StakeCreateWithoutUserInput, StakeUncheckedCreateWithoutUserInput>
  }

  export type StakeCreateManyUserInputEnvelope = {
    data: StakeCreateManyUserInput | StakeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CurrentLiquidityCreateWithoutUserInput = {
    id?: string
    tokenAddress?: string | null
    isNative: boolean
    amount: number
  }

  export type CurrentLiquidityUncheckedCreateWithoutUserInput = {
    id?: string
    tokenAddress?: string | null
    isNative: boolean
    amount: number
  }

  export type CurrentLiquidityCreateOrConnectWithoutUserInput = {
    where: CurrentLiquidityWhereUniqueInput
    create: XOR<CurrentLiquidityCreateWithoutUserInput, CurrentLiquidityUncheckedCreateWithoutUserInput>
  }

  export type CurrentLiquidityCreateManyUserInputEnvelope = {
    data: CurrentLiquidityCreateManyUserInput | CurrentLiquidityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    image: string
    totalWinners: number
    totalPrize: number
    campaignStartDate: Date | string
    campaginEndDate: Date | string
    rewardType: $Enums.RewardsType
    isNative: boolean
    chainId: number
    tokenAddress?: string | null
    tokenSymbol?: string | null
    tokenName?: string | null
    campaignPostImage?: string | null
    campaignPostLink?: string | null
    campaignPostVideo?: string | null
    taskType: $Enums.TaskType
    particpationType: $Enums.ParticpationType
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignWinners?: UserCreateNestedManyWithoutWinnedCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    image: string
    totalWinners: number
    totalPrize: number
    campaignStartDate: Date | string
    campaginEndDate: Date | string
    rewardType: $Enums.RewardsType
    isNative: boolean
    chainId: number
    tokenAddress?: string | null
    tokenSymbol?: string | null
    tokenName?: string | null
    campaignPostImage?: string | null
    campaignPostLink?: string | null
    campaignPostVideo?: string | null
    taskType: $Enums.TaskType
    particpationType: $Enums.ParticpationType
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignWinners?: UserUncheckedCreateNestedManyWithoutWinnedCampaignsInput
  }

  export type CampaignCreateOrConnectWithoutOwnerInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutOwnerInput, CampaignUncheckedCreateWithoutOwnerInput>
  }

  export type CampaignCreateManyOwnerInputEnvelope = {
    data: CampaignCreateManyOwnerInput | CampaignCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutCampaignWinnersInput = {
    id?: string
    title: string
    description: string
    image: string
    totalWinners: number
    totalPrize: number
    campaignStartDate: Date | string
    campaginEndDate: Date | string
    rewardType: $Enums.RewardsType
    isNative: boolean
    chainId: number
    tokenAddress?: string | null
    tokenSymbol?: string | null
    tokenName?: string | null
    campaignPostImage?: string | null
    campaignPostLink?: string | null
    campaignPostVideo?: string | null
    taskType: $Enums.TaskType
    particpationType: $Enums.ParticpationType
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutCampaignWinnersInput = {
    id?: string
    ownerId: string
    title: string
    description: string
    image: string
    totalWinners: number
    totalPrize: number
    campaignStartDate: Date | string
    campaginEndDate: Date | string
    rewardType: $Enums.RewardsType
    isNative: boolean
    chainId: number
    tokenAddress?: string | null
    tokenSymbol?: string | null
    tokenName?: string | null
    campaignPostImage?: string | null
    campaignPostLink?: string | null
    campaignPostVideo?: string | null
    taskType: $Enums.TaskType
    particpationType: $Enums.ParticpationType
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutCampaignWinnersInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCampaignWinnersInput, CampaignUncheckedCreateWithoutCampaignWinnersInput>
  }

  export type InvestmentUpsertWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutUserInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutUserInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: StringFilter<"Investment"> | string
    userId?: StringFilter<"Investment"> | string
    accounts?: StringNullableListFilter<"Investment">
    title?: StringFilter<"Investment"> | string
    description?: StringFilter<"Investment"> | string
    image?: StringFilter<"Investment"> | string
    tokenAddress?: StringFilter<"Investment"> | string
    tokenSymbol?: StringFilter<"Investment"> | string
    tokenName?: StringFilter<"Investment"> | string
    chainId?: IntNullableListFilter<"Investment">
    status?: EnumStatusFilter<"Investment"> | $Enums.Status
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
  }

  export type PitchUpsertWithWhereUniqueWithoutUserInput = {
    where: PitchWhereUniqueInput
    update: XOR<PitchUpdateWithoutUserInput, PitchUncheckedUpdateWithoutUserInput>
    create: XOR<PitchCreateWithoutUserInput, PitchUncheckedCreateWithoutUserInput>
  }

  export type PitchUpdateWithWhereUniqueWithoutUserInput = {
    where: PitchWhereUniqueInput
    data: XOR<PitchUpdateWithoutUserInput, PitchUncheckedUpdateWithoutUserInput>
  }

  export type PitchUpdateManyWithWhereWithoutUserInput = {
    where: PitchScalarWhereInput
    data: XOR<PitchUpdateManyMutationInput, PitchUncheckedUpdateManyWithoutUserInput>
  }

  export type PitchScalarWhereInput = {
    AND?: PitchScalarWhereInput | PitchScalarWhereInput[]
    OR?: PitchScalarWhereInput[]
    NOT?: PitchScalarWhereInput | PitchScalarWhereInput[]
    id?: StringFilter<"Pitch"> | string
    userId?: StringFilter<"Pitch"> | string
    investmentId?: StringFilter<"Pitch"> | string
    title?: StringFilter<"Pitch"> | string
    description?: StringFilter<"Pitch"> | string
    deadline?: DateTimeFilter<"Pitch"> | Date | string
    initialInvestment?: IntFilter<"Pitch"> | number
    profitAmountEstimation?: IntFilter<"Pitch"> | number
    isNative?: BoolFilter<"Pitch"> | boolean
    investmentTokenAddress?: StringNullableFilter<"Pitch"> | string | null
    profitPercentageAmount?: IntFilter<"Pitch"> | number
    chainId?: IntFilter<"Pitch"> | number
    isExecuted?: BoolFilter<"Pitch"> | boolean
    voteFor?: IntFilter<"Pitch"> | number
    voteAgainst?: IntFilter<"Pitch"> | number
    totalVoters?: IntFilter<"Pitch"> | number
    Status?: EnumStatusFilter<"Pitch"> | $Enums.Status
    createdAt?: DateTimeFilter<"Pitch"> | Date | string
    updatedAt?: DateTimeFilter<"Pitch"> | Date | string
  }

  export type StakeUpsertWithWhereUniqueWithoutUserInput = {
    where: StakeWhereUniqueInput
    update: XOR<StakeUpdateWithoutUserInput, StakeUncheckedUpdateWithoutUserInput>
    create: XOR<StakeCreateWithoutUserInput, StakeUncheckedCreateWithoutUserInput>
  }

  export type StakeUpdateWithWhereUniqueWithoutUserInput = {
    where: StakeWhereUniqueInput
    data: XOR<StakeUpdateWithoutUserInput, StakeUncheckedUpdateWithoutUserInput>
  }

  export type StakeUpdateManyWithWhereWithoutUserInput = {
    where: StakeScalarWhereInput
    data: XOR<StakeUpdateManyMutationInput, StakeUncheckedUpdateManyWithoutUserInput>
  }

  export type StakeScalarWhereInput = {
    AND?: StakeScalarWhereInput | StakeScalarWhereInput[]
    OR?: StakeScalarWhereInput[]
    NOT?: StakeScalarWhereInput | StakeScalarWhereInput[]
    id?: StringFilter<"Stake"> | string
    userId?: StringFilter<"Stake"> | string
    investmentId?: StringFilter<"Stake"> | string
    stake?: IntFilter<"Stake"> | number
    chainId?: IntFilter<"Stake"> | number
    createdAt?: DateTimeFilter<"Stake"> | Date | string
  }

  export type CurrentLiquidityUpsertWithWhereUniqueWithoutUserInput = {
    where: CurrentLiquidityWhereUniqueInput
    update: XOR<CurrentLiquidityUpdateWithoutUserInput, CurrentLiquidityUncheckedUpdateWithoutUserInput>
    create: XOR<CurrentLiquidityCreateWithoutUserInput, CurrentLiquidityUncheckedCreateWithoutUserInput>
  }

  export type CurrentLiquidityUpdateWithWhereUniqueWithoutUserInput = {
    where: CurrentLiquidityWhereUniqueInput
    data: XOR<CurrentLiquidityUpdateWithoutUserInput, CurrentLiquidityUncheckedUpdateWithoutUserInput>
  }

  export type CurrentLiquidityUpdateManyWithWhereWithoutUserInput = {
    where: CurrentLiquidityScalarWhereInput
    data: XOR<CurrentLiquidityUpdateManyMutationInput, CurrentLiquidityUncheckedUpdateManyWithoutUserInput>
  }

  export type CurrentLiquidityScalarWhereInput = {
    AND?: CurrentLiquidityScalarWhereInput | CurrentLiquidityScalarWhereInput[]
    OR?: CurrentLiquidityScalarWhereInput[]
    NOT?: CurrentLiquidityScalarWhereInput | CurrentLiquidityScalarWhereInput[]
    id?: StringFilter<"CurrentLiquidity"> | string
    userId?: StringFilter<"CurrentLiquidity"> | string
    tokenAddress?: StringNullableFilter<"CurrentLiquidity"> | string | null
    isNative?: BoolFilter<"CurrentLiquidity"> | boolean
    amount?: IntFilter<"CurrentLiquidity"> | number
  }

  export type CampaignUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutOwnerInput, CampaignUncheckedUpdateWithoutOwnerInput>
    create: XOR<CampaignCreateWithoutOwnerInput, CampaignUncheckedCreateWithoutOwnerInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutOwnerInput, CampaignUncheckedUpdateWithoutOwnerInput>
  }

  export type CampaignUpdateManyWithWhereWithoutOwnerInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    ownerId?: StringFilter<"Campaign"> | string
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    image?: StringFilter<"Campaign"> | string
    totalWinners?: IntFilter<"Campaign"> | number
    totalPrize?: IntFilter<"Campaign"> | number
    campaignStartDate?: DateTimeFilter<"Campaign"> | Date | string
    campaginEndDate?: DateTimeFilter<"Campaign"> | Date | string
    rewardType?: EnumRewardsTypeFilter<"Campaign"> | $Enums.RewardsType
    isNative?: BoolFilter<"Campaign"> | boolean
    chainId?: IntFilter<"Campaign"> | number
    tokenAddress?: StringNullableFilter<"Campaign"> | string | null
    tokenSymbol?: StringNullableFilter<"Campaign"> | string | null
    tokenName?: StringNullableFilter<"Campaign"> | string | null
    campaignPostImage?: StringNullableFilter<"Campaign"> | string | null
    campaignPostLink?: StringNullableFilter<"Campaign"> | string | null
    campaignPostVideo?: StringNullableFilter<"Campaign"> | string | null
    taskType?: EnumTaskTypeFilter<"Campaign"> | $Enums.TaskType
    particpationType?: EnumParticpationTypeFilter<"Campaign"> | $Enums.ParticpationType
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutCampaignWinnersInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCampaignWinnersInput, CampaignUncheckedUpdateWithoutCampaignWinnersInput>
    create: XOR<CampaignCreateWithoutCampaignWinnersInput, CampaignUncheckedCreateWithoutCampaignWinnersInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCampaignWinnersInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCampaignWinnersInput, CampaignUncheckedUpdateWithoutCampaignWinnersInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCampaignWinnersInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCampaignWinnersInput>
  }

  export type UserCreateWithoutPitchesInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    stakes?: StakeCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserUncheckedCreateWithoutPitchesInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    stakes?: StakeUncheckedCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignUncheckedCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserCreateOrConnectWithoutPitchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPitchesInput, UserUncheckedCreateWithoutPitchesInput>
  }

  export type InvestmentCreateWithoutPitchesInput = {
    id?: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvestmentsInput
    partners?: StakeCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateWithoutPitchesInput = {
    id?: string
    userId: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: StakeUncheckedCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentCreateOrConnectWithoutPitchesInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutPitchesInput, InvestmentUncheckedCreateWithoutPitchesInput>
  }

  export type UserUpsertWithoutPitchesInput = {
    update: XOR<UserUpdateWithoutPitchesInput, UserUncheckedUpdateWithoutPitchesInput>
    create: XOR<UserCreateWithoutPitchesInput, UserUncheckedCreateWithoutPitchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPitchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPitchesInput, UserUncheckedUpdateWithoutPitchesInput>
  }

  export type UserUpdateWithoutPitchesInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    stakes?: StakeUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type UserUncheckedUpdateWithoutPitchesInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    stakes?: StakeUncheckedUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUncheckedUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type InvestmentUpsertWithoutPitchesInput = {
    update: XOR<InvestmentUpdateWithoutPitchesInput, InvestmentUncheckedUpdateWithoutPitchesInput>
    create: XOR<InvestmentCreateWithoutPitchesInput, InvestmentUncheckedCreateWithoutPitchesInput>
    where?: InvestmentWhereInput
  }

  export type InvestmentUpdateToOneWithWhereWithoutPitchesInput = {
    where?: InvestmentWhereInput
    data: XOR<InvestmentUpdateWithoutPitchesInput, InvestmentUncheckedUpdateWithoutPitchesInput>
  }

  export type InvestmentUpdateWithoutPitchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
    partners?: StakeUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutPitchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: StakeUncheckedUpdateManyWithoutInvestmentNestedInput
  }

  export type UserCreateWithoutStakesInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    pitches?: PitchCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserUncheckedCreateWithoutStakesInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    pitches?: PitchUncheckedCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignUncheckedCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserCreateOrConnectWithoutStakesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStakesInput, UserUncheckedCreateWithoutStakesInput>
  }

  export type InvestmentCreateWithoutPartnersInput = {
    id?: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvestmentsInput
    pitches?: PitchCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateWithoutPartnersInput = {
    id?: string
    userId: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    pitches?: PitchUncheckedCreateNestedManyWithoutInvestmentInput
  }

  export type InvestmentCreateOrConnectWithoutPartnersInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutPartnersInput, InvestmentUncheckedCreateWithoutPartnersInput>
  }

  export type UserUpsertWithoutStakesInput = {
    update: XOR<UserUpdateWithoutStakesInput, UserUncheckedUpdateWithoutStakesInput>
    create: XOR<UserCreateWithoutStakesInput, UserUncheckedCreateWithoutStakesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStakesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStakesInput, UserUncheckedUpdateWithoutStakesInput>
  }

  export type UserUpdateWithoutStakesInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    pitches?: PitchUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type UserUncheckedUpdateWithoutStakesInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    pitches?: PitchUncheckedUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUncheckedUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type InvestmentUpsertWithoutPartnersInput = {
    update: XOR<InvestmentUpdateWithoutPartnersInput, InvestmentUncheckedUpdateWithoutPartnersInput>
    create: XOR<InvestmentCreateWithoutPartnersInput, InvestmentUncheckedCreateWithoutPartnersInput>
    where?: InvestmentWhereInput
  }

  export type InvestmentUpdateToOneWithWhereWithoutPartnersInput = {
    where?: InvestmentWhereInput
    data: XOR<InvestmentUpdateWithoutPartnersInput, InvestmentUncheckedUpdateWithoutPartnersInput>
  }

  export type InvestmentUpdateWithoutPartnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
    pitches?: PitchUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutPartnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitches?: PitchUncheckedUpdateManyWithoutInvestmentNestedInput
  }

  export type UserCreateWithoutInvestmentsInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pitches?: PitchCreateNestedManyWithoutUserInput
    stakes?: StakeCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserUncheckedCreateWithoutInvestmentsInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pitches?: PitchUncheckedCreateNestedManyWithoutUserInput
    stakes?: StakeUncheckedCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignUncheckedCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserCreateOrConnectWithoutInvestmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
  }

  export type StakeCreateWithoutInvestmentInput = {
    id?: string
    stake: number
    chainId: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStakesInput
  }

  export type StakeUncheckedCreateWithoutInvestmentInput = {
    id?: string
    userId: string
    stake: number
    chainId: number
    createdAt?: Date | string
  }

  export type StakeCreateOrConnectWithoutInvestmentInput = {
    where: StakeWhereUniqueInput
    create: XOR<StakeCreateWithoutInvestmentInput, StakeUncheckedCreateWithoutInvestmentInput>
  }

  export type StakeCreateManyInvestmentInputEnvelope = {
    data: StakeCreateManyInvestmentInput | StakeCreateManyInvestmentInput[]
    skipDuplicates?: boolean
  }

  export type PitchCreateWithoutInvestmentInput = {
    id?: string
    title: string
    description: string
    deadline: Date | string
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress?: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor?: number
    voteAgainst?: number
    totalVoters?: number
    Status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPitchesInput
  }

  export type PitchUncheckedCreateWithoutInvestmentInput = {
    id?: string
    userId: string
    title: string
    description: string
    deadline: Date | string
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress?: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor?: number
    voteAgainst?: number
    totalVoters?: number
    Status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PitchCreateOrConnectWithoutInvestmentInput = {
    where: PitchWhereUniqueInput
    create: XOR<PitchCreateWithoutInvestmentInput, PitchUncheckedCreateWithoutInvestmentInput>
  }

  export type PitchCreateManyInvestmentInputEnvelope = {
    data: PitchCreateManyInvestmentInput | PitchCreateManyInvestmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInvestmentsInput = {
    update: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserUpdateWithoutInvestmentsInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitches?: PitchUpdateManyWithoutUserNestedInput
    stakes?: StakeUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestmentsInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitches?: PitchUncheckedUpdateManyWithoutUserNestedInput
    stakes?: StakeUncheckedUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUncheckedUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type StakeUpsertWithWhereUniqueWithoutInvestmentInput = {
    where: StakeWhereUniqueInput
    update: XOR<StakeUpdateWithoutInvestmentInput, StakeUncheckedUpdateWithoutInvestmentInput>
    create: XOR<StakeCreateWithoutInvestmentInput, StakeUncheckedCreateWithoutInvestmentInput>
  }

  export type StakeUpdateWithWhereUniqueWithoutInvestmentInput = {
    where: StakeWhereUniqueInput
    data: XOR<StakeUpdateWithoutInvestmentInput, StakeUncheckedUpdateWithoutInvestmentInput>
  }

  export type StakeUpdateManyWithWhereWithoutInvestmentInput = {
    where: StakeScalarWhereInput
    data: XOR<StakeUpdateManyMutationInput, StakeUncheckedUpdateManyWithoutInvestmentInput>
  }

  export type PitchUpsertWithWhereUniqueWithoutInvestmentInput = {
    where: PitchWhereUniqueInput
    update: XOR<PitchUpdateWithoutInvestmentInput, PitchUncheckedUpdateWithoutInvestmentInput>
    create: XOR<PitchCreateWithoutInvestmentInput, PitchUncheckedCreateWithoutInvestmentInput>
  }

  export type PitchUpdateWithWhereUniqueWithoutInvestmentInput = {
    where: PitchWhereUniqueInput
    data: XOR<PitchUpdateWithoutInvestmentInput, PitchUncheckedUpdateWithoutInvestmentInput>
  }

  export type PitchUpdateManyWithWhereWithoutInvestmentInput = {
    where: PitchScalarWhereInput
    data: XOR<PitchUpdateManyMutationInput, PitchUncheckedUpdateManyWithoutInvestmentInput>
  }

  export type UserCreateWithoutLiquiditysInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    pitches?: PitchCreateNestedManyWithoutUserInput
    stakes?: StakeCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserUncheckedCreateWithoutLiquiditysInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    pitches?: PitchUncheckedCreateNestedManyWithoutUserInput
    stakes?: StakeUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutOwnerInput
    winnedCampaigns?: CampaignUncheckedCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserCreateOrConnectWithoutLiquiditysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLiquiditysInput, UserUncheckedCreateWithoutLiquiditysInput>
  }

  export type UserUpsertWithoutLiquiditysInput = {
    update: XOR<UserUpdateWithoutLiquiditysInput, UserUncheckedUpdateWithoutLiquiditysInput>
    create: XOR<UserCreateWithoutLiquiditysInput, UserUncheckedCreateWithoutLiquiditysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLiquiditysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLiquiditysInput, UserUncheckedUpdateWithoutLiquiditysInput>
  }

  export type UserUpdateWithoutLiquiditysInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    pitches?: PitchUpdateManyWithoutUserNestedInput
    stakes?: StakeUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type UserUncheckedUpdateWithoutLiquiditysInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    pitches?: PitchUncheckedUpdateManyWithoutUserNestedInput
    stakes?: StakeUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutOwnerNestedInput
    winnedCampaigns?: CampaignUncheckedUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type UserCreateWithoutCampaignsInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    pitches?: PitchCreateNestedManyWithoutUserInput
    stakes?: StakeCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityCreateNestedManyWithoutUserInput
    winnedCampaigns?: CampaignCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    pitches?: PitchUncheckedCreateNestedManyWithoutUserInput
    stakes?: StakeUncheckedCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityUncheckedCreateNestedManyWithoutUserInput
    winnedCampaigns?: CampaignUncheckedCreateNestedManyWithoutCampaignWinnersInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type UserCreateWithoutWinnedCampaignsInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    pitches?: PitchCreateNestedManyWithoutUserInput
    stakes?: StakeCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutWinnedCampaignsInput = {
    walletAddress: string
    name?: string | null
    bio?: string | null
    image?: string | null
    discord?: string | null
    twitter?: string | null
    opensea?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    pitches?: PitchUncheckedCreateNestedManyWithoutUserInput
    stakes?: StakeUncheckedCreateNestedManyWithoutUserInput
    liquiditys?: CurrentLiquidityUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutWinnedCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWinnedCampaignsInput, UserUncheckedCreateWithoutWinnedCampaignsInput>
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    pitches?: PitchUpdateManyWithoutUserNestedInput
    stakes?: StakeUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUpdateManyWithoutUserNestedInput
    winnedCampaigns?: CampaignUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    pitches?: PitchUncheckedUpdateManyWithoutUserNestedInput
    stakes?: StakeUncheckedUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUncheckedUpdateManyWithoutUserNestedInput
    winnedCampaigns?: CampaignUncheckedUpdateManyWithoutCampaignWinnersNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutWinnedCampaignsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutWinnedCampaignsInput, UserUncheckedUpdateWithoutWinnedCampaignsInput>
    create: XOR<UserCreateWithoutWinnedCampaignsInput, UserUncheckedCreateWithoutWinnedCampaignsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutWinnedCampaignsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutWinnedCampaignsInput, UserUncheckedUpdateWithoutWinnedCampaignsInput>
  }

  export type UserUpdateManyWithWhereWithoutWinnedCampaignsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutWinnedCampaignsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    walletAddress?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    discord?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    opensea?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type InvestmentCreateManyUserInput = {
    id?: string
    accounts?: InvestmentCreateaccountsInput | string[]
    title: string
    description: string
    image: string
    tokenAddress: string
    tokenSymbol: string
    tokenName: string
    chainId?: InvestmentCreatechainIdInput | number[]
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PitchCreateManyUserInput = {
    id?: string
    investmentId: string
    title: string
    description: string
    deadline: Date | string
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress?: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor?: number
    voteAgainst?: number
    totalVoters?: number
    Status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StakeCreateManyUserInput = {
    id?: string
    investmentId: string
    stake: number
    chainId: number
    createdAt?: Date | string
  }

  export type CurrentLiquidityCreateManyUserInput = {
    id?: string
    tokenAddress?: string | null
    isNative: boolean
    amount: number
  }

  export type CampaignCreateManyOwnerInput = {
    id?: string
    title: string
    description: string
    image: string
    totalWinners: number
    totalPrize: number
    campaignStartDate: Date | string
    campaginEndDate: Date | string
    rewardType: $Enums.RewardsType
    isNative: boolean
    chainId: number
    tokenAddress?: string | null
    tokenSymbol?: string | null
    tokenName?: string | null
    campaignPostImage?: string | null
    campaignPostLink?: string | null
    campaignPostVideo?: string | null
    taskType: $Enums.TaskType
    particpationType: $Enums.ParticpationType
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: StakeUpdateManyWithoutInvestmentNestedInput
    pitches?: PitchUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: StakeUncheckedUpdateManyWithoutInvestmentNestedInput
    pitches?: PitchUncheckedUpdateManyWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accounts?: InvestmentUpdateaccountsInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenName?: StringFieldUpdateOperationsInput | string
    chainId?: InvestmentUpdatechainIdInput | number[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investment?: InvestmentUpdateOneRequiredWithoutPitchesNestedInput
  }

  export type PitchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StakeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investment?: InvestmentUpdateOneRequiredWithoutPartnersNestedInput
  }

  export type StakeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StakeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentId?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrentLiquidityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isNative?: BoolFieldUpdateOperationsInput | boolean
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type CurrentLiquidityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isNative?: BoolFieldUpdateOperationsInput | boolean
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type CurrentLiquidityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    isNative?: BoolFieldUpdateOperationsInput | boolean
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type CampaignUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignWinners?: UserUpdateManyWithoutWinnedCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignWinners?: UserUncheckedUpdateManyWithoutWinnedCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutCampaignWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCampaignWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyWithoutCampaignWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    totalWinners?: IntFieldUpdateOperationsInput | number
    totalPrize?: IntFieldUpdateOperationsInput | number
    campaignStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    campaginEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardType?: EnumRewardsTypeFieldUpdateOperationsInput | $Enums.RewardsType
    isNative?: BoolFieldUpdateOperationsInput | boolean
    chainId?: IntFieldUpdateOperationsInput | number
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: NullableStringFieldUpdateOperationsInput | string | null
    tokenName?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostImage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostLink?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPostVideo?: NullableStringFieldUpdateOperationsInput | string | null
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    particpationType?: EnumParticpationTypeFieldUpdateOperationsInput | $Enums.ParticpationType
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StakeCreateManyInvestmentInput = {
    id?: string
    userId: string
    stake: number
    chainId: number
    createdAt?: Date | string
  }

  export type PitchCreateManyInvestmentInput = {
    id?: string
    userId: string
    title: string
    description: string
    deadline: Date | string
    initialInvestment: number
    profitAmountEstimation: number
    isNative: boolean
    investmentTokenAddress?: string | null
    profitPercentageAmount: number
    chainId: number
    isExecuted: boolean
    voteFor?: number
    voteAgainst?: number
    totalVoters?: number
    Status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StakeUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStakesNestedInput
  }

  export type StakeUncheckedUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StakeUncheckedUpdateManyWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stake?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPitchesNestedInput
  }

  export type PitchUncheckedUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PitchUncheckedUpdateManyWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    initialInvestment?: IntFieldUpdateOperationsInput | number
    profitAmountEstimation?: IntFieldUpdateOperationsInput | number
    isNative?: BoolFieldUpdateOperationsInput | boolean
    investmentTokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    profitPercentageAmount?: IntFieldUpdateOperationsInput | number
    chainId?: IntFieldUpdateOperationsInput | number
    isExecuted?: BoolFieldUpdateOperationsInput | boolean
    voteFor?: IntFieldUpdateOperationsInput | number
    voteAgainst?: IntFieldUpdateOperationsInput | number
    totalVoters?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutWinnedCampaignsInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    pitches?: PitchUpdateManyWithoutUserNestedInput
    stakes?: StakeUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutWinnedCampaignsInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    pitches?: PitchUncheckedUpdateManyWithoutUserNestedInput
    stakes?: StakeUncheckedUpdateManyWithoutUserNestedInput
    liquiditys?: CurrentLiquidityUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutWinnedCampaignsInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    opensea?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvestmentCountOutputTypeDefaultArgs instead
     */
    export type InvestmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvestmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignCountOutputTypeDefaultArgs instead
     */
    export type CampaignCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PitchDefaultArgs instead
     */
    export type PitchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PitchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StakeDefaultArgs instead
     */
    export type StakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StakeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvestmentDefaultArgs instead
     */
    export type InvestmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvestmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrentLiquidityDefaultArgs instead
     */
    export type CurrentLiquidityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrentLiquidityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignDefaultArgs instead
     */
    export type CampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}