import { PropertyValidator, BooleanPropertyValidator, NumberPropertyValidator, StringPropertyValidator, ArrayPropertyValidator, ObjectPropertyValidator } from "./property-validator";
import { ValidationRule } from "./validation-rule";
import { Validator } from "./validator";
export declare class InternalPropertyValidator<T, TProperty> implements PropertyValidator<T, TProperty>, BooleanPropertyValidator<T>, NumberPropertyValidator<T>, StringPropertyValidator<T>, ArrayPropertyValidator<T, any>, ObjectPropertyValidator<T, any> {
    private readonly _propertyName;
    private _hasError;
    private _error;
    private readonly _validationRules;
    private _lastValidationRule;
    private _conditionPredicate;
    private _overrideError;
    private _errorMessage;
    get propertyName(): keyof T;
    get hasError(): boolean;
    get error(): string;
    constructor(propertyName: keyof T);
    validate(value: T): void;
    isRequired(): this;
    isOptional(): this;
    isBoolean(): this;
    isString(): this;
    isNumber(): this;
    isArray(): this;
    isObject(): this;
    isType(type: Function): this;
    isInstanceOf(type: Function): this;
    ensure(propertyValidationPredicate: (propertyValue: TProperty | any) => boolean): this;
    ensureT(valueValidationPredicate: (value: T) => boolean): this;
    useValidationRule(validationRule: ValidationRule<TProperty | any>): this;
    useValidator(validator: Validator<TProperty | any>): this;
    when(conditionPredicate: (value: T) => boolean): this;
    withMessage(errorMessage: string | Function): this;
    hasMinValue(minValue: number): this;
    hasMaxValue(maxValue: number): this;
    hasExactValue(exactValue: number): this;
    isInNumbers(values: ReadonlyArray<number>): this;
    isNotInNumbers(values: ReadonlyArray<number>): this;
    hasMinLength(minLength: number): this;
    hasMaxLength(maxLength: number): this;
    hasExactLength(exactLength: number): this;
    isInStrings(values: ReadonlyArray<string>, ignoreCase?: boolean): this;
    isNotInStrings(values: ReadonlyArray<string>, ignoreCase?: boolean): this;
    containsOnlyNumbers(): this;
    isPhoneNumber(): this;
    isEmail(): this;
    isDate(format: string): this;
    matchesRegex(regex: RegExp): this;
    isEnum(enumType: object): this;
    useCollectionValidator(validator: Validator<any>): this;
    private _checkIsNumber;
    private _getEnumValues;
}
