import { Prisma } from "@prisma/client";

/**
 * Get required fields for an entity in prisma schema.
 * @param modelName
 * @returns required fields.
 */
export function getRequiredFields(modelName: Prisma.ModelName): string[] {
    const modelMeta = Prisma.dmmf.datamodel.models.find(
        (model) => model.name === modelName
    );

    if (!modelMeta) {
        throw new Error(`Model ${modelName} not found in Prisma schema`);
    }

    // Filter required fields.
    return modelMeta.fields
        .filter((field) => field.isRequired && !field.isId && !field.hasDefaultValue && !field.relationName)
        .map((field) => field.name);
}