
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
 * Model Records
 * 
 */
export type Records = $Result.DefaultSelection<Prisma.$RecordsPayload>
/**
 * Model Positions
 * 
 */
export type Positions = $Result.DefaultSelection<Prisma.$PositionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Records
 * const records = await prisma.records.findMany()
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
   * // Fetch zero or more Records
   * const records = await prisma.records.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.records`: Exposes CRUD operations for the **Records** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.records.findMany()
    * ```
    */
  get records(): Prisma.RecordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.positions`: Exposes CRUD operations for the **Positions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.positions.findMany()
    * ```
    */
  get positions(): Prisma.PositionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Records: 'Records',
    Positions: 'Positions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "records" | "positions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Records: {
        payload: Prisma.$RecordsPayload<ExtArgs>
        fields: Prisma.RecordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          findFirst: {
            args: Prisma.RecordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          findMany: {
            args: Prisma.RecordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>[]
          }
          create: {
            args: Prisma.RecordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          createMany: {
            args: Prisma.RecordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>[]
          }
          delete: {
            args: Prisma.RecordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          update: {
            args: Prisma.RecordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          deleteMany: {
            args: Prisma.RecordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>[]
          }
          upsert: {
            args: Prisma.RecordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          aggregate: {
            args: Prisma.RecordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecords>
          }
          groupBy: {
            args: Prisma.RecordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordsCountArgs<ExtArgs>
            result: $Utils.Optional<RecordsCountAggregateOutputType> | number
          }
        }
      }
      Positions: {
        payload: Prisma.$PositionsPayload<ExtArgs>
        fields: Prisma.PositionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          findFirst: {
            args: Prisma.PositionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          findMany: {
            args: Prisma.PositionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>[]
          }
          create: {
            args: Prisma.PositionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          createMany: {
            args: Prisma.PositionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>[]
          }
          delete: {
            args: Prisma.PositionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          update: {
            args: Prisma.PositionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          deleteMany: {
            args: Prisma.PositionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>[]
          }
          upsert: {
            args: Prisma.PositionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          aggregate: {
            args: Prisma.PositionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePositions>
          }
          groupBy: {
            args: Prisma.PositionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionsCountArgs<ExtArgs>
            result: $Utils.Optional<PositionsCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    records?: RecordsOmit
    positions?: PositionsOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Records
   */

  export type AggregateRecords = {
    _count: RecordsCountAggregateOutputType | null
    _avg: RecordsAvgAggregateOutputType | null
    _sum: RecordsSumAggregateOutputType | null
    _min: RecordsMinAggregateOutputType | null
    _max: RecordsMaxAggregateOutputType | null
  }

  export type RecordsAvgAggregateOutputType = {
    id: number | null
  }

  export type RecordsSumAggregateOutputType = {
    id: number | null
  }

  export type RecordsMinAggregateOutputType = {
    id: number | null
    name: string | null
    time: Date | null
  }

  export type RecordsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    time: Date | null
  }

  export type RecordsCountAggregateOutputType = {
    id: number
    name: number
    time: number
    _all: number
  }


  export type RecordsAvgAggregateInputType = {
    id?: true
  }

  export type RecordsSumAggregateInputType = {
    id?: true
  }

  export type RecordsMinAggregateInputType = {
    id?: true
    name?: true
    time?: true
  }

  export type RecordsMaxAggregateInputType = {
    id?: true
    name?: true
    time?: true
  }

  export type RecordsCountAggregateInputType = {
    id?: true
    name?: true
    time?: true
    _all?: true
  }

  export type RecordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to aggregate.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordsMaxAggregateInputType
  }

  export type GetRecordsAggregateType<T extends RecordsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecords[P]>
      : GetScalarType<T[P], AggregateRecords[P]>
  }




  export type RecordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithAggregationInput | RecordsOrderByWithAggregationInput[]
    by: RecordsScalarFieldEnum[] | RecordsScalarFieldEnum
    having?: RecordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordsCountAggregateInputType | true
    _avg?: RecordsAvgAggregateInputType
    _sum?: RecordsSumAggregateInputType
    _min?: RecordsMinAggregateInputType
    _max?: RecordsMaxAggregateInputType
  }

  export type RecordsGroupByOutputType = {
    id: number
    name: string
    time: Date
    _count: RecordsCountAggregateOutputType | null
    _avg: RecordsAvgAggregateOutputType | null
    _sum: RecordsSumAggregateOutputType | null
    _min: RecordsMinAggregateOutputType | null
    _max: RecordsMaxAggregateOutputType | null
  }

  type GetRecordsGroupByPayload<T extends RecordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordsGroupByOutputType[P]>
            : GetScalarType<T[P], RecordsGroupByOutputType[P]>
        }
      >
    >


  export type RecordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    time?: boolean
  }, ExtArgs["result"]["records"]>

  export type RecordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    time?: boolean
  }, ExtArgs["result"]["records"]>

  export type RecordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    time?: boolean
  }, ExtArgs["result"]["records"]>

  export type RecordsSelectScalar = {
    id?: boolean
    name?: boolean
    time?: boolean
  }

  export type RecordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "time", ExtArgs["result"]["records"]>

  export type $RecordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Records"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      time: Date
    }, ExtArgs["result"]["records"]>
    composites: {}
  }

  type RecordsGetPayload<S extends boolean | null | undefined | RecordsDefaultArgs> = $Result.GetResult<Prisma.$RecordsPayload, S>

  type RecordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordsCountAggregateInputType | true
    }

  export interface RecordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Records'], meta: { name: 'Records' } }
    /**
     * Find zero or one Records that matches the filter.
     * @param {RecordsFindUniqueArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordsFindUniqueArgs>(args: SelectSubset<T, RecordsFindUniqueArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Records that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordsFindUniqueOrThrowArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordsFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindFirstArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordsFindFirstArgs>(args?: SelectSubset<T, RecordsFindFirstArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Records that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindFirstOrThrowArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordsFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.records.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.records.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordsWithIdOnly = await prisma.records.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordsFindManyArgs>(args?: SelectSubset<T, RecordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Records.
     * @param {RecordsCreateArgs} args - Arguments to create a Records.
     * @example
     * // Create one Records
     * const Records = await prisma.records.create({
     *   data: {
     *     // ... data to create a Records
     *   }
     * })
     * 
     */
    create<T extends RecordsCreateArgs>(args: SelectSubset<T, RecordsCreateArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Records.
     * @param {RecordsCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const records = await prisma.records.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordsCreateManyArgs>(args?: SelectSubset<T, RecordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Records and returns the data saved in the database.
     * @param {RecordsCreateManyAndReturnArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const records = await prisma.records.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Records and only return the `id`
     * const recordsWithIdOnly = await prisma.records.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordsCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Records.
     * @param {RecordsDeleteArgs} args - Arguments to delete one Records.
     * @example
     * // Delete one Records
     * const Records = await prisma.records.delete({
     *   where: {
     *     // ... filter to delete one Records
     *   }
     * })
     * 
     */
    delete<T extends RecordsDeleteArgs>(args: SelectSubset<T, RecordsDeleteArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Records.
     * @param {RecordsUpdateArgs} args - Arguments to update one Records.
     * @example
     * // Update one Records
     * const records = await prisma.records.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordsUpdateArgs>(args: SelectSubset<T, RecordsUpdateArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Records.
     * @param {RecordsDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.records.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordsDeleteManyArgs>(args?: SelectSubset<T, RecordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const records = await prisma.records.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordsUpdateManyArgs>(args: SelectSubset<T, RecordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records and returns the data updated in the database.
     * @param {RecordsUpdateManyAndReturnArgs} args - Arguments to update many Records.
     * @example
     * // Update many Records
     * const records = await prisma.records.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Records and only return the `id`
     * const recordsWithIdOnly = await prisma.records.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecordsUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Records.
     * @param {RecordsUpsertArgs} args - Arguments to update or create a Records.
     * @example
     * // Update or create a Records
     * const records = await prisma.records.upsert({
     *   create: {
     *     // ... data to create a Records
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Records we want to update
     *   }
     * })
     */
    upsert<T extends RecordsUpsertArgs>(args: SelectSubset<T, RecordsUpsertArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.records.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordsCountArgs>(
      args?: Subset<T, RecordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecordsAggregateArgs>(args: Subset<T, RecordsAggregateArgs>): Prisma.PrismaPromise<GetRecordsAggregateType<T>>

    /**
     * Group by Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsGroupByArgs} args - Group by arguments.
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
      T extends RecordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordsGroupByArgs['orderBy'] }
        : { orderBy?: RecordsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Records model
   */
  readonly fields: RecordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Records.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Records model
   */
  interface RecordsFieldRefs {
    readonly id: FieldRef<"Records", 'Int'>
    readonly name: FieldRef<"Records", 'String'>
    readonly time: FieldRef<"Records", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Records findUnique
   */
  export type RecordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records findUniqueOrThrow
   */
  export type RecordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records findFirst
   */
  export type RecordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Records findFirstOrThrow
   */
  export type RecordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Records findMany
   */
  export type RecordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Records create
   */
  export type RecordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * The data needed to create a Records.
     */
    data: XOR<RecordsCreateInput, RecordsUncheckedCreateInput>
  }

  /**
   * Records createMany
   */
  export type RecordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordsCreateManyInput | RecordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Records createManyAndReturn
   */
  export type RecordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * The data used to create many Records.
     */
    data: RecordsCreateManyInput | RecordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Records update
   */
  export type RecordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * The data needed to update a Records.
     */
    data: XOR<RecordsUpdateInput, RecordsUncheckedUpdateInput>
    /**
     * Choose, which Records to update.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records updateMany
   */
  export type RecordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordsWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
  }

  /**
   * Records updateManyAndReturn
   */
  export type RecordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * The data used to update Records.
     */
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordsWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
  }

  /**
   * Records upsert
   */
  export type RecordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * The filter to search for the Records to update in case it exists.
     */
    where: RecordsWhereUniqueInput
    /**
     * In case the Records found by the `where` argument doesn't exist, create a new Records with this data.
     */
    create: XOR<RecordsCreateInput, RecordsUncheckedCreateInput>
    /**
     * In case the Records was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordsUpdateInput, RecordsUncheckedUpdateInput>
  }

  /**
   * Records delete
   */
  export type RecordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
    /**
     * Filter which Records to delete.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records deleteMany
   */
  export type RecordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordsWhereInput
    /**
     * Limit how many Records to delete.
     */
    limit?: number
  }

  /**
   * Records without action
   */
  export type RecordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Records
     */
    omit?: RecordsOmit<ExtArgs> | null
  }


  /**
   * Model Positions
   */

  export type AggregatePositions = {
    _count: PositionsCountAggregateOutputType | null
    _avg: PositionsAvgAggregateOutputType | null
    _sum: PositionsSumAggregateOutputType | null
    _min: PositionsMinAggregateOutputType | null
    _max: PositionsMaxAggregateOutputType | null
  }

  export type PositionsAvgAggregateOutputType = {
    id: number | null
  }

  export type PositionsSumAggregateOutputType = {
    id: number | null
  }

  export type PositionsMinAggregateOutputType = {
    id: number | null
  }

  export type PositionsMaxAggregateOutputType = {
    id: number | null
  }

  export type PositionsCountAggregateOutputType = {
    id: number
    waldo: number
    wizard: number
    wilma: number
    odlaw: number
    woof: number
    _all: number
  }


  export type PositionsAvgAggregateInputType = {
    id?: true
  }

  export type PositionsSumAggregateInputType = {
    id?: true
  }

  export type PositionsMinAggregateInputType = {
    id?: true
  }

  export type PositionsMaxAggregateInputType = {
    id?: true
  }

  export type PositionsCountAggregateInputType = {
    id?: true
    waldo?: true
    wizard?: true
    wilma?: true
    odlaw?: true
    woof?: true
    _all?: true
  }

  export type PositionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to aggregate.
     */
    where?: PositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionsOrderByWithRelationInput | PositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionsMaxAggregateInputType
  }

  export type GetPositionsAggregateType<T extends PositionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePositions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePositions[P]>
      : GetScalarType<T[P], AggregatePositions[P]>
  }




  export type PositionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionsWhereInput
    orderBy?: PositionsOrderByWithAggregationInput | PositionsOrderByWithAggregationInput[]
    by: PositionsScalarFieldEnum[] | PositionsScalarFieldEnum
    having?: PositionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionsCountAggregateInputType | true
    _avg?: PositionsAvgAggregateInputType
    _sum?: PositionsSumAggregateInputType
    _min?: PositionsMinAggregateInputType
    _max?: PositionsMaxAggregateInputType
  }

  export type PositionsGroupByOutputType = {
    id: number
    waldo: JsonValue
    wizard: JsonValue
    wilma: JsonValue
    odlaw: JsonValue
    woof: JsonValue
    _count: PositionsCountAggregateOutputType | null
    _avg: PositionsAvgAggregateOutputType | null
    _sum: PositionsSumAggregateOutputType | null
    _min: PositionsMinAggregateOutputType | null
    _max: PositionsMaxAggregateOutputType | null
  }

  type GetPositionsGroupByPayload<T extends PositionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionsGroupByOutputType[P]>
            : GetScalarType<T[P], PositionsGroupByOutputType[P]>
        }
      >
    >


  export type PositionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waldo?: boolean
    wizard?: boolean
    wilma?: boolean
    odlaw?: boolean
    woof?: boolean
  }, ExtArgs["result"]["positions"]>

  export type PositionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waldo?: boolean
    wizard?: boolean
    wilma?: boolean
    odlaw?: boolean
    woof?: boolean
  }, ExtArgs["result"]["positions"]>

  export type PositionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waldo?: boolean
    wizard?: boolean
    wilma?: boolean
    odlaw?: boolean
    woof?: boolean
  }, ExtArgs["result"]["positions"]>

  export type PositionsSelectScalar = {
    id?: boolean
    waldo?: boolean
    wizard?: boolean
    wilma?: boolean
    odlaw?: boolean
    woof?: boolean
  }

  export type PositionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "waldo" | "wizard" | "wilma" | "odlaw" | "woof", ExtArgs["result"]["positions"]>

  export type $PositionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Positions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      waldo: Prisma.JsonValue
      wizard: Prisma.JsonValue
      wilma: Prisma.JsonValue
      odlaw: Prisma.JsonValue
      woof: Prisma.JsonValue
    }, ExtArgs["result"]["positions"]>
    composites: {}
  }

  type PositionsGetPayload<S extends boolean | null | undefined | PositionsDefaultArgs> = $Result.GetResult<Prisma.$PositionsPayload, S>

  type PositionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionsCountAggregateInputType | true
    }

  export interface PositionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Positions'], meta: { name: 'Positions' } }
    /**
     * Find zero or one Positions that matches the filter.
     * @param {PositionsFindUniqueArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionsFindUniqueArgs>(args: SelectSubset<T, PositionsFindUniqueArgs<ExtArgs>>): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Positions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionsFindUniqueOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionsFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsFindFirstArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionsFindFirstArgs>(args?: SelectSubset<T, PositionsFindFirstArgs<ExtArgs>>): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Positions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsFindFirstOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionsFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.positions.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.positions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionsWithIdOnly = await prisma.positions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionsFindManyArgs>(args?: SelectSubset<T, PositionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Positions.
     * @param {PositionsCreateArgs} args - Arguments to create a Positions.
     * @example
     * // Create one Positions
     * const Positions = await prisma.positions.create({
     *   data: {
     *     // ... data to create a Positions
     *   }
     * })
     * 
     */
    create<T extends PositionsCreateArgs>(args: SelectSubset<T, PositionsCreateArgs<ExtArgs>>): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {PositionsCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const positions = await prisma.positions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionsCreateManyArgs>(args?: SelectSubset<T, PositionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionsCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const positions = await prisma.positions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `id`
     * const positionsWithIdOnly = await prisma.positions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionsCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Positions.
     * @param {PositionsDeleteArgs} args - Arguments to delete one Positions.
     * @example
     * // Delete one Positions
     * const Positions = await prisma.positions.delete({
     *   where: {
     *     // ... filter to delete one Positions
     *   }
     * })
     * 
     */
    delete<T extends PositionsDeleteArgs>(args: SelectSubset<T, PositionsDeleteArgs<ExtArgs>>): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Positions.
     * @param {PositionsUpdateArgs} args - Arguments to update one Positions.
     * @example
     * // Update one Positions
     * const positions = await prisma.positions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionsUpdateArgs>(args: SelectSubset<T, PositionsUpdateArgs<ExtArgs>>): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionsDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.positions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionsDeleteManyArgs>(args?: SelectSubset<T, PositionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const positions = await prisma.positions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionsUpdateManyArgs>(args: SelectSubset<T, PositionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionsUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const positions = await prisma.positions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `id`
     * const positionsWithIdOnly = await prisma.positions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionsUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Positions.
     * @param {PositionsUpsertArgs} args - Arguments to update or create a Positions.
     * @example
     * // Update or create a Positions
     * const positions = await prisma.positions.upsert({
     *   create: {
     *     // ... data to create a Positions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Positions we want to update
     *   }
     * })
     */
    upsert<T extends PositionsUpsertArgs>(args: SelectSubset<T, PositionsUpsertArgs<ExtArgs>>): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.positions.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionsCountArgs>(
      args?: Subset<T, PositionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionsAggregateArgs>(args: Subset<T, PositionsAggregateArgs>): Prisma.PrismaPromise<GetPositionsAggregateType<T>>

    /**
     * Group by Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsGroupByArgs} args - Group by arguments.
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
      T extends PositionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionsGroupByArgs['orderBy'] }
        : { orderBy?: PositionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PositionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Positions model
   */
  readonly fields: PositionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Positions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Positions model
   */
  interface PositionsFieldRefs {
    readonly id: FieldRef<"Positions", 'Int'>
    readonly waldo: FieldRef<"Positions", 'Json'>
    readonly wizard: FieldRef<"Positions", 'Json'>
    readonly wilma: FieldRef<"Positions", 'Json'>
    readonly odlaw: FieldRef<"Positions", 'Json'>
    readonly woof: FieldRef<"Positions", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Positions findUnique
   */
  export type PositionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where: PositionsWhereUniqueInput
  }

  /**
   * Positions findUniqueOrThrow
   */
  export type PositionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where: PositionsWhereUniqueInput
  }

  /**
   * Positions findFirst
   */
  export type PositionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionsOrderByWithRelationInput | PositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }

  /**
   * Positions findFirstOrThrow
   */
  export type PositionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionsOrderByWithRelationInput | PositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }

  /**
   * Positions findMany
   */
  export type PositionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionsOrderByWithRelationInput | PositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }

  /**
   * Positions create
   */
  export type PositionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * The data needed to create a Positions.
     */
    data: XOR<PositionsCreateInput, PositionsUncheckedCreateInput>
  }

  /**
   * Positions createMany
   */
  export type PositionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionsCreateManyInput | PositionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Positions createManyAndReturn
   */
  export type PositionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionsCreateManyInput | PositionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Positions update
   */
  export type PositionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * The data needed to update a Positions.
     */
    data: XOR<PositionsUpdateInput, PositionsUncheckedUpdateInput>
    /**
     * Choose, which Positions to update.
     */
    where: PositionsWhereUniqueInput
  }

  /**
   * Positions updateMany
   */
  export type PositionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionsUpdateManyMutationInput, PositionsUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionsWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Positions updateManyAndReturn
   */
  export type PositionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionsUpdateManyMutationInput, PositionsUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionsWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Positions upsert
   */
  export type PositionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * The filter to search for the Positions to update in case it exists.
     */
    where: PositionsWhereUniqueInput
    /**
     * In case the Positions found by the `where` argument doesn't exist, create a new Positions with this data.
     */
    create: XOR<PositionsCreateInput, PositionsUncheckedCreateInput>
    /**
     * In case the Positions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionsUpdateInput, PositionsUncheckedUpdateInput>
  }

  /**
   * Positions delete
   */
  export type PositionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
    /**
     * Filter which Positions to delete.
     */
    where: PositionsWhereUniqueInput
  }

  /**
   * Positions deleteMany
   */
  export type PositionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionsWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Positions without action
   */
  export type PositionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Positions
     */
    omit?: PositionsOmit<ExtArgs> | null
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


  export const RecordsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    time: 'time'
  };

  export type RecordsScalarFieldEnum = (typeof RecordsScalarFieldEnum)[keyof typeof RecordsScalarFieldEnum]


  export const PositionsScalarFieldEnum: {
    id: 'id',
    waldo: 'waldo',
    wizard: 'wizard',
    wilma: 'wilma',
    odlaw: 'odlaw',
    woof: 'woof'
  };

  export type PositionsScalarFieldEnum = (typeof PositionsScalarFieldEnum)[keyof typeof PositionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type RecordsWhereInput = {
    AND?: RecordsWhereInput | RecordsWhereInput[]
    OR?: RecordsWhereInput[]
    NOT?: RecordsWhereInput | RecordsWhereInput[]
    id?: IntFilter<"Records"> | number
    name?: StringFilter<"Records"> | string
    time?: DateTimeFilter<"Records"> | Date | string
  }

  export type RecordsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    time?: SortOrder
  }

  export type RecordsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecordsWhereInput | RecordsWhereInput[]
    OR?: RecordsWhereInput[]
    NOT?: RecordsWhereInput | RecordsWhereInput[]
    name?: StringFilter<"Records"> | string
    time?: DateTimeFilter<"Records"> | Date | string
  }, "id">

  export type RecordsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    time?: SortOrder
    _count?: RecordsCountOrderByAggregateInput
    _avg?: RecordsAvgOrderByAggregateInput
    _max?: RecordsMaxOrderByAggregateInput
    _min?: RecordsMinOrderByAggregateInput
    _sum?: RecordsSumOrderByAggregateInput
  }

  export type RecordsScalarWhereWithAggregatesInput = {
    AND?: RecordsScalarWhereWithAggregatesInput | RecordsScalarWhereWithAggregatesInput[]
    OR?: RecordsScalarWhereWithAggregatesInput[]
    NOT?: RecordsScalarWhereWithAggregatesInput | RecordsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Records"> | number
    name?: StringWithAggregatesFilter<"Records"> | string
    time?: DateTimeWithAggregatesFilter<"Records"> | Date | string
  }

  export type PositionsWhereInput = {
    AND?: PositionsWhereInput | PositionsWhereInput[]
    OR?: PositionsWhereInput[]
    NOT?: PositionsWhereInput | PositionsWhereInput[]
    id?: IntFilter<"Positions"> | number
    waldo?: JsonFilter<"Positions">
    wizard?: JsonFilter<"Positions">
    wilma?: JsonFilter<"Positions">
    odlaw?: JsonFilter<"Positions">
    woof?: JsonFilter<"Positions">
  }

  export type PositionsOrderByWithRelationInput = {
    id?: SortOrder
    waldo?: SortOrder
    wizard?: SortOrder
    wilma?: SortOrder
    odlaw?: SortOrder
    woof?: SortOrder
  }

  export type PositionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PositionsWhereInput | PositionsWhereInput[]
    OR?: PositionsWhereInput[]
    NOT?: PositionsWhereInput | PositionsWhereInput[]
    waldo?: JsonFilter<"Positions">
    wizard?: JsonFilter<"Positions">
    wilma?: JsonFilter<"Positions">
    odlaw?: JsonFilter<"Positions">
    woof?: JsonFilter<"Positions">
  }, "id">

  export type PositionsOrderByWithAggregationInput = {
    id?: SortOrder
    waldo?: SortOrder
    wizard?: SortOrder
    wilma?: SortOrder
    odlaw?: SortOrder
    woof?: SortOrder
    _count?: PositionsCountOrderByAggregateInput
    _avg?: PositionsAvgOrderByAggregateInput
    _max?: PositionsMaxOrderByAggregateInput
    _min?: PositionsMinOrderByAggregateInput
    _sum?: PositionsSumOrderByAggregateInput
  }

  export type PositionsScalarWhereWithAggregatesInput = {
    AND?: PositionsScalarWhereWithAggregatesInput | PositionsScalarWhereWithAggregatesInput[]
    OR?: PositionsScalarWhereWithAggregatesInput[]
    NOT?: PositionsScalarWhereWithAggregatesInput | PositionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Positions"> | number
    waldo?: JsonWithAggregatesFilter<"Positions">
    wizard?: JsonWithAggregatesFilter<"Positions">
    wilma?: JsonWithAggregatesFilter<"Positions">
    odlaw?: JsonWithAggregatesFilter<"Positions">
    woof?: JsonWithAggregatesFilter<"Positions">
  }

  export type RecordsCreateInput = {
    name: string
    time: Date | string
  }

  export type RecordsUncheckedCreateInput = {
    id?: number
    name: string
    time: Date | string
  }

  export type RecordsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsCreateManyInput = {
    id?: number
    name: string
    time: Date | string
  }

  export type RecordsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionsCreateInput = {
    waldo: JsonNullValueInput | InputJsonValue
    wizard: JsonNullValueInput | InputJsonValue
    wilma: JsonNullValueInput | InputJsonValue
    odlaw: JsonNullValueInput | InputJsonValue
    woof: JsonNullValueInput | InputJsonValue
  }

  export type PositionsUncheckedCreateInput = {
    id?: number
    waldo: JsonNullValueInput | InputJsonValue
    wizard: JsonNullValueInput | InputJsonValue
    wilma: JsonNullValueInput | InputJsonValue
    odlaw: JsonNullValueInput | InputJsonValue
    woof: JsonNullValueInput | InputJsonValue
  }

  export type PositionsUpdateInput = {
    waldo?: JsonNullValueInput | InputJsonValue
    wizard?: JsonNullValueInput | InputJsonValue
    wilma?: JsonNullValueInput | InputJsonValue
    odlaw?: JsonNullValueInput | InputJsonValue
    woof?: JsonNullValueInput | InputJsonValue
  }

  export type PositionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    waldo?: JsonNullValueInput | InputJsonValue
    wizard?: JsonNullValueInput | InputJsonValue
    wilma?: JsonNullValueInput | InputJsonValue
    odlaw?: JsonNullValueInput | InputJsonValue
    woof?: JsonNullValueInput | InputJsonValue
  }

  export type PositionsCreateManyInput = {
    id?: number
    waldo: JsonNullValueInput | InputJsonValue
    wizard: JsonNullValueInput | InputJsonValue
    wilma: JsonNullValueInput | InputJsonValue
    odlaw: JsonNullValueInput | InputJsonValue
    woof: JsonNullValueInput | InputJsonValue
  }

  export type PositionsUpdateManyMutationInput = {
    waldo?: JsonNullValueInput | InputJsonValue
    wizard?: JsonNullValueInput | InputJsonValue
    wilma?: JsonNullValueInput | InputJsonValue
    odlaw?: JsonNullValueInput | InputJsonValue
    woof?: JsonNullValueInput | InputJsonValue
  }

  export type PositionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    waldo?: JsonNullValueInput | InputJsonValue
    wizard?: JsonNullValueInput | InputJsonValue
    wilma?: JsonNullValueInput | InputJsonValue
    odlaw?: JsonNullValueInput | InputJsonValue
    woof?: JsonNullValueInput | InputJsonValue
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

  export type RecordsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    time?: SortOrder
  }

  export type RecordsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecordsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    time?: SortOrder
  }

  export type RecordsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    time?: SortOrder
  }

  export type RecordsSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PositionsCountOrderByAggregateInput = {
    id?: SortOrder
    waldo?: SortOrder
    wizard?: SortOrder
    wilma?: SortOrder
    odlaw?: SortOrder
    woof?: SortOrder
  }

  export type PositionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PositionsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PositionsMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PositionsSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



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