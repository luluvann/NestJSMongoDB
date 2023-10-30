import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the configuration available globally
    }),
    AuthModule,
    UsersModule,
    BookmarkModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule here
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('CONNECTMONGODB'), // Access CONNECTMONGODB
      }),
      inject: [ConfigService], // Inject ConfigService
    }),
  ],
})
export class AppModule {
  constructor(private configService: ConfigService) {} // Inject ConfigService
}
