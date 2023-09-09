import { Artist } from "../../db";

export async function updateArtist(artistId: number, fieldsToUpdate: Partial<{ name: string, password: string, image: string }>) {
    const updatedFields: Record<string, string | undefined> = {};

    if (fieldsToUpdate.name !== undefined) {
        updatedFields.name = fieldsToUpdate.name;
    }

    if (fieldsToUpdate.password !== undefined) {
        updatedFields.password = fieldsToUpdate.password;
    }

    if (fieldsToUpdate.image !== undefined) {
        updatedFields.image = fieldsToUpdate.image;
    }

    const [updatedRowCount, [updatedArtist]] = await Artist.update(updatedFields, {
        where: { id: artistId },
        returning: true,
    });
    console.log("Updated Row Count:", updatedRowCount);
    console.log("Updated Artist:", updatedArtist);
    console.log("Artist has been updated", updatedArtist);
    return updatedArtist;
}