import { Schema, model } from 'mongoose'

const CategorySchema = model("Category", {})

export const getAllCategories = async () => {
    const categories = await CategorySchema.find()
    return categories
}

