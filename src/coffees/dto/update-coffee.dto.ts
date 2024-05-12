import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

/**
 * PartialType:
 * It returns a new instance of types from the class we passed as param with all of the properties set to optional
 * It also inherits all the validation rules applied via decorators
 * Also adds a single validation rule to each field: @IsOptionsl() rule
 **/
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
