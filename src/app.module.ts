import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';
import { SupAdminsModule } from './supadmins/supadmins.module';

@Module({
  imports: [UsersModule, AdminsModule, SupAdminsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
