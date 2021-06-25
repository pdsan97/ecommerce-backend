const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
	// find all tags
	// be sure to include its associated Product data

	const databaseTags = await Tag.findAll({ include: [Product] });

	res.send(databaseTags);
});

router.get('/:id', async (req, res) => {
	// find a single tag by its `id`
	// be sure to include its associated Product data

	const { id } = req.params;
	console.log(id);
	const databaseTag = await Tag.findOne({
		where: { id },
		include: [Product],
	});
	console.log(databaseTag);
	res.send(databaseTag);
});

router.post('/', async (req, res) => {
	// create a new tag
	const { tag_name } = req.body;
	const databaseTag = await Tag.create({ tag_name });
	res.send({
		status: 'Created succesfully',
		data: databaseTag,
	});
});

router.put('/:id', async (req, res) => {
	// update a tag's name by its `id` value
	const { tag_name } = req.body;
	const { id } = req.params;
	await Tag.update(
		{ tag_name },
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
	// delete on tag by its `id` value

	const { id } = req.params;

	await Tag.destroy({
		where: {
			id,
		},
	});
	res.send({
		status: 'Deleted sucessfully',
	});
});

module.exports = router;
