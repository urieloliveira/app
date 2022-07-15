import { Category } from "./category";

describe("Category Tests", () => {
  test("constructor of category", () => {
    const props = {
      name: "Movie",
      description: "Movie category",
      is_active: true,
      created_at: new Date(),
    };
    const category = new Category(props);
    expect(category.props).toStrictEqual(props);
  });
});
