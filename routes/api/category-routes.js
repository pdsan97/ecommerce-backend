const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
	// find all categories
	// be sure to include its associated Products

	const databaseCategories = await Category.findAll({ include: [Product] });

	res.send(databaseCategories);
});

router.get('/:id', async (req, res) => {
	// find one category by its `id` value
	// be sure to include its associated Products
	const { id } = req.params;

	const databaseCategory = await Category.findOne({
		where: { id },
		include: [Product],
	});

	res.send(databaseCategory);
});

router.post('/', async (req, res) => {
	// create a new category
	const { category_name } = req.body;
	const databaseCategory = await Category.create({ category_name });
	res.send({
		status: 'Created succesfully',
		data: databaseCategory,
	});
});

router.put('/:id', async (req, res) => {
	// update a category by its `id` value
	const { category_name } = req.body;
	const { id } = req.params;
	await Category.update(
		{ category_name },
		{
			where: {
				id,
			},
		}
	);
	res.send({
		status: 'Updated sucessfully',
	});
});

router.delete('/:id', async (req, res) => {
	// delete a category by its `id` value
	const { id } = req.params;

	await Category.destroy({
		where: {
			id,
		},
	});
	res.send({
		status: 'Deleted sucessfully',
	});
});

module.exports = router;
