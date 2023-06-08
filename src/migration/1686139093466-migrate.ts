import { MigrationInterface, QueryRunner } from "typeorm";

export class migrate1686139093466 implements MigrationInterface {
    name = 'migrate1686139093466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "course"`);
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "shift"`);
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "refered_contact_no"`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "Course" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "Shift" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "referal_contact_no" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "Category_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "discount" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "Gender" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "Image" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "Image"`);
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "Gender"`);
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "Category_name"`);
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "referal_contact_no"`);
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "Shift"`);
        await queryRunner.query(`ALTER TABLE "student_info" DROP COLUMN "Course"`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "refered_contact_no" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "shift" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student_info" ADD "course" character varying NOT NULL`);
    }

}
