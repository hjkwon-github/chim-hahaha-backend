import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FirebaseModule } from 'nestjs-firebase';

@Module({
  imports: [
    FirebaseModule.forRoot({
      googleApplicationCredential: 'firebase-admin-key.json',
    }),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
