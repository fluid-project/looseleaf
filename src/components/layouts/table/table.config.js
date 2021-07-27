module.exports = {
    order: 6,
    status: "wip",
    context: {
        caption: "Members of the party.",
        captionSide: "top",
        columnHeaders: {
            "name": "Name",
            "email": "E-mail",
            "role": "Role"
        },
        rowHeaders: {},
        records: [
            {
                "name": "Bilbo Baggins",
                "email": "bilbo.baggins@hotmail.com",
                "role": "Rogue"
            },
            {
                "name": "Gandalf the Grey",
                "email": "gandalf@icloud.com",
                "role": "Wizard"
            },
            {
                "name": "Thorin Oakenshield",
                "email": "oakenshield@gmail.com",
                "role": "Fighter"
            }
        ]
    },
    variants: [
        {
            name: "bottom-caption",
            label: "Bottom caption",
            context: {
                captionSide: "bottom"
            }
        }
    ]
};
