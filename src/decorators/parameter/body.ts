/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from '@hapi/joi';
import { PARAMETER_BODY_METADATA } from '../constants';

export type ParameterRouterBodyMetaData = {
  index: number;
  schemaMap: Joi.SchemaMap;
};

export function PBody(schemaMap: Joi.SchemaMap) {
  return function(target: any, propertyKey: string | symbol, parameterIndex: number): void {
    const data: ParameterRouterBodyMetaData = { index: parameterIndex, schemaMap: schemaMap };
    Reflect.defineMetadata(PARAMETER_BODY_METADATA, data, target, propertyKey);
  };
}
